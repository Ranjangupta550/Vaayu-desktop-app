import React from "react";
import ThemeToggle from "../ThemeChanger";

function ToggleBar() {
  return (
    <div
      id="draggable"
      className="bg-black h-1  dark:bg-surface-dark z-50 w-screen border-b-2  flex"
    >
      <span className="text-secondary   tracking-wide">
        Vaayu Ground Control Software
      </span>
      <ThemeToggle />
    </div>
  );
}

export default ToggleBar;
