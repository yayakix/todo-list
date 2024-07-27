import { create } from "zustand";

// Define types
export type ThemeType = {
  themeName: string;
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
};
export type ThemePropertyKeys = keyof Omit<ThemeType, "themeName">; // Exclude 'themeName' if not used in themePropertyList

export type ThemeStore = {
  themes: ThemeType[];
  addTheme: (newTheme: ThemeType) => void;
};

// Default themes (for initial setup)
const themeDefaultExamples: ThemeType[] = [
  {
    themeName: "lightDefault",
    background: "white",
    text: "black",
    primary: "blue",
    secondary: "white",
    accent: "white",
  },
  {
    themeName: "solarizedDarkDefault",
    background: "gray",
    text: "gray",
    primary: "teal",
    secondary: "gray",
    accent: "pink",
  },
  {
    themeName: "solarizedLightDefault",
    background: "gray",
    text: "gray",
    primary: "green",
    secondary: "gray",
    accent: "orange",
  },
  {
    themeName: "darkDefault",
    background: "gray",
    text: "white",
    primary: "blue",
    secondary: "gray",
    accent: "red",
  },
];

// Create the store
const useThemeStore = create<ThemeStore>((set) => ({
  themes: themeDefaultExamples, // Initialize with predefined themes
  addTheme: (newTheme) => {
    console.log("storetheme", newTheme);
    set((state) => {
      // Check if the theme already exists
      const themeExists = state.themes.some(
        (theme) => theme.themeName === newTheme.themeName
      );

      if (themeExists) {
        // Update existing theme
        return {
          themes: state.themes.map((theme) =>
            theme.themeName === newTheme.themeName ? newTheme : theme
          ),
        };
      } else {
        // Add new theme
        return {
          themes: [...state.themes, newTheme],
        };
      }
    });
  },
}));

export default useThemeStore;
