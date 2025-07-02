import React from 'react'
import{useState} from 'react'
import {Sidebar,TopBar,Button} from '@ui' // Corrected import statement
import { Outlet } from 'react-router-dom';

/*
*
 * MainLayout component provides the primary layout structure for the application.
 * It includes a top bar, a sidebar, and a main content area.
 *
 * Structure:
 * - TopBar: Displayed at the top of the layout.
 * - Sidebar: Displayed on the left side.
 * - Main content area: Displays the main content of the application.
 *
 * @component
 * @returns {JSX.Element} The main layout structure with top bar, sidebar, and content area.
 */
function MainLayout() {
  return (
    <div className="w-screen  h-screen relative flex flex-col ">
      <div className="h-[28px]">
        <TopBar />
      </div>

      <div className="relative h-[calc(100%-28px)] flex flex-1 overflow-hidden bg-bar">
        <Sidebar />
        <div className="flex-1 overflow-y-hidden rounded-tl-3xl shadow-md z-10  bg-primary flex items-center   ">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
}


export default MainLayout;
