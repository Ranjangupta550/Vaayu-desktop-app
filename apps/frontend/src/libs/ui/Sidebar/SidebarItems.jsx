import React from 'react';
import { NavLink } from 'react-router-dom';
import {Icon} from '@ui';
import { useTheme } from '@store';  

function SidebarItem({ label, route, icon, isSidebarOpen,size=25 }) {


  return (
   <NavLink
  to={route}
  className={({ isActive }) =>
    [
      "flex items-center gap-2 h-10 w-4/5 rounded-md transition-all",
      isActive ? "text-gray-900 shadow-sm font-extrabold bg-enabled" : "text-gray-500 hover:bg-hover hover:text-accent",
      isSidebarOpen ? " justify-start" : "justify-center ", // padding only when open
    ].join(" ")
  }
>
  <div className={`flex items-center justify-center ${isSidebarOpen ? "w-10" : "w-6"} h-full`}>
    <Icon icon={icon} size={size} />
  </div>
  {/* <Icon icon={icon} size={size} /> */}
  {isSidebarOpen && (
    <span className={`text-sm`}>{label}</span>
  )}
</NavLink>
  );
}

export default SidebarItem;
