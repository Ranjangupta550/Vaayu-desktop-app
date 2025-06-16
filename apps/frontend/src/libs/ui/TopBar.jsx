import React from "react";
import { ThemeToggle } from "./index";
import icons from "../../assets";

function TopBar() {
  return (
    <div
      id="draggable"
      className="bg-bar h-1 relative z-50 w-screen  flex items-center justify-between overflow-hidden"
    >
      <span className="text-invert-primary font-bold opacity-80 tracking-wide items-center gap-x-2 flex text-sm">
        <img className="h-4 " src={icons.vaayuLogo} alt="" />
        Vaayu Ground Control Software
      </span>
      <div className="flex relative right-36
      
      ">

      <ThemeToggle />
      </div>
    </div>
  );
}

export default TopBar;
