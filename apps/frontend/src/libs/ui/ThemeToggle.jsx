import { useEffect, useState } from "react";
import { useTheme } from "../store";
import {Button} from "@/components"; // 

export default function ThemeToggle() {
const theme = useTheme((state) => state.theme);
const toggleTheme = useTheme((state) => state.toggleTheme);
const isDark = theme === "dark";

function toggleThemeHandler() {
  toggleTheme();
// console.log("Toggling theme");
  
}


  return (
    <div className="relative flex w-10 h-5 p-3    rounded-4xl overflow-hidden cursor-default transition duration-400 bg-toggle" 
    style={{ 
      WebkitAppRegion: "no-drag", 
      userSelect: "none",
      // border: "2px solid rgba(255, 255, 255, 0.3)", // white with 80% opacity// fallback for custom opacity
    }}
    >
      <Button
        onClick={toggleThemeHandler}
        className="absolute bg-white  w-5 h-5 rounded-full flex items-center  shadow-black justify-center text-center transition duration-400 m-1"
        style={{
          left: isDark ? "0" :"",
          right: isDark ? "" : "0",
          transition: "left 0.5s ease-in-out, right 0.5s ease-in-out",

        }}
      >
       
      </Button>
    </div>
  );
}
