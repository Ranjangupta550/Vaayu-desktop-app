import React from 'react'
import{useState} from 'react'
import {Sidebar,TopBar} from '@ui' // Corrected import statement

function MainLayout() {

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-[28px]">
        <TopBar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar/>
        <div className="flex-1 h-full overflow-y-auto border-amber-300  border bg-primary p-4">
          <h1 className="text-2xl font-bold">Welcome to the Main Layout</h1>
          <p>This is where your main content will be displayed.</p>
        </div>
      </div>
    </div>
  );
}


export default MainLayout;
