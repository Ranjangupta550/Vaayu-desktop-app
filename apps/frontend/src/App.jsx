import { useEffect } from "react";
import { useTheme } from "./libs/store";
import { TopBar } from "@ui"; // Corrected import statement
import { Route, RouterProvider } from "react-router-dom";
import router from "./routers"

function App() {
  const theme = useTheme((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme); // adds class to <html>
  }, [theme]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
