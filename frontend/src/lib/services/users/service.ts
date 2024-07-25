import { useUser, useClerk } from "@clerk/clerk-react";
import axios from "axios";
import { UserOutputDto, UserInputDto } from "./types";

const API_URL = process.env.API_URL;

export const useUserService = () => {
  const { user } = useUser();
  const { signOut, openSignIn, session } = useClerk();

  const protectedAxios = axios.create({
    baseURL: API_URL,
  });

  protectedAxios.interceptors.request.use(async (config) => {
    const token = await session?.getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return {
    getCurrentUser: async (): Promise<UserOutputDto | null> => {
      if (!user) return null;
      try {
        const response = await protectedAxios.get("/users/current");
        return response.data;
      } catch (error) {
        console.error("Error getting current user:", error);
        return null;
      }
    },

    signIn: async () => {
      try {
        openSignIn();
      } catch (error) {
        console.error("Error during sign in:", error);
      }
    },

    signOut: async () => {
      try {
        await signOut();
      } catch (error) {
        console.error("Error during sign out:", error);
      }
    },

    isAuthenticated: () => {
      return !!user;
    },

    updateUser: async (
      userData: UserInputDto
    ): Promise<UserOutputDto | null> => {
      if (!user) return null;
      try {
        const response = await protectedAxios.put("/users", userData);
        return response.data;
      } catch (error) {
        console.error("Error updating user:", error);
        return null;
      }
    },

    createOrUpdateUser: async (
      userData: UserInputDto
    ): Promise<UserOutputDto | null> => {
      if (!user) return null;
      try {
        const response = await protectedAxios.post("/users", userData);
        return response.data;
      } catch (error) {
        console.error("Error creating/updating user:", error);
        return null;
      }
    },
  };
};
