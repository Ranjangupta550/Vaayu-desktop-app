import { useEffect } from "react";
import { useTheme } from "./libs/store";
import { ThemeChanger, ToggleBar } from "./components";

function App() {
  const theme = useTheme((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme); // adds class to <html>
  }, [theme]);

  return (
    <>
      <ToggleBar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
        <h1 className="text-4xl font-bold text-text dark:text-text-dark">
          Vaayu Ground Control Software
        </h1>

        <ThemeChanger />
      </div>
    </>
  );
}

export default App;
