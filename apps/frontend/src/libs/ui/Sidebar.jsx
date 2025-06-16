import React from 'react'
import { useState } from 'react'
import {Button} from '@components' // Corrected import statement

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`bg-bar overflow-hidden w-14 flex flex-col justify-between border shadow-lg transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-14'}`}>
      <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        Toggle Sidebar
      </Button>
    </div>
  )
}

export default Sidebar
