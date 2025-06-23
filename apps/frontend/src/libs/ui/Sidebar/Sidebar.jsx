import React from "react";
import { useState } from "react";
import { Button, SidebarItems } from "@ui"; // Corrected import statement
import sidebarConfig from "./sidebar.config";
import {List} from "phosphor-react";
import { useTheme } from "@store";

function Sidebar() {
 const isSidebarOpen = useTheme ((state)=> state.isSidebarOpen);

  return (
    <>  
      <div
        className={`relative bg-bar overflow-hidden  flex flex-col gap-y-4 top-5  items-center shadow-lg transition-all duration-300 ease-in-out     ${
          isSidebarOpen ? "w-48" : "w-14"
        }`}
      >
        
        {sidebarConfig.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex  w-full   h-auto ${isSidebarOpen ? "items-center justify-center" : "p-1 justify-center" } `}
            >
              <SidebarItems
                label={item.label}
                route={item.route}
                icon={item.icon}
                size={20}
                isSidebarOpen={isSidebarOpen}
              />
            </div>
          );
        })}
        </div>

    </>
  );
}

export default Sidebar;
