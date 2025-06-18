import React from "react";
import { ThemeToggle } from "../index";
import icons from "../../../assets";
import { useState } from "react";
import { Button } from "@ui";
import { List } from "phosphor-react";import { useTheme } from "@store";

function TopBar() {
// const isSidebarOpen = useTheme ((state)=> state.isSidebarOpen);
const setIsSidebarOpen = useTheme((state) => state.setIsSidebarOpen);
  return (
    <div
      id="draggable"
      className="bg-bar h-1 relative z-50 w-screen  flex items-center justify-between overflow-hidden"
    >
      <Button className="z-50 bg-transparent cursor-pointer "
      style={{ WebkitAppRegion: "no-drag", userSelect: "none" }}
      onClick={() => {
        console.log("Sidebar toggled");
        setIsSidebarOpen();

       
      }}>
        <List size={24} weight="bold" />
      </Button>
      <span className="text-invert-primary font-extrabold opacity-80 tracking-wide items-center gap-x-2 flex text-sm">
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
