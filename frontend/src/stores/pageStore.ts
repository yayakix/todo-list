import { create } from "zustand";

export enum PageTypes {
  HOME = "HOME",
  TASK_LIST = "TASK_LIST",
  NEW_TASK = "NEW_TASK",
  NEW_THEME = "NEW_THEME",
}
export type PageStore = {
  page: string;
  prevPage: string;
  updatePage: (newPage: string) => void;
};

const usePageStore = create<PageStore>((set) => ({
  page: "start",
  prevPage: "",
  updatePage: (newPage) =>
    set((state) => ({
      prevPage: state.page,
      page: newPage,
    })),
}));

export default usePageStore;
