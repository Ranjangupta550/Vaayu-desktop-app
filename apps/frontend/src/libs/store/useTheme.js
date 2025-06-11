import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { theme } from "../../../tailwind.config";
const useTheme = create(
  persist((set) => ({
    theme: "light",
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === "light" ? "dark" : "light";
        console.log("Theme toggled to:", newTheme);
        return { theme: newTheme };
      }),
  }),
  {
    name: 'useTheme'
  }
)
);
export default useTheme;