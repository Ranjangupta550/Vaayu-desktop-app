import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { theme } from "../../../tailwind.config";
const useTheme = create(
  persist((set) => ({
    theme: "light",
    isSidebarOpen: false,
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === "light" ? "dark" : "light";
        return { theme: newTheme };
      }),
    setIsSidebarOpen: () =>
      set((state) => {
        return { isSidebarOpen: !state.isSidebarOpen };
      }),
  }),
  {
    name: 'useTheme'
  }
)
);
export default useTheme;