// components/SidebarItem.jsx
import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@ui'; // Assuming @ui resolves to your Icon component
import {Portal} from '@components'; // Adjust the path based on where you save Portal.jsx


function SidebarItem({ label, route, icon, size = 25 }) {
  const [showLabel, setShowLabel] = useState(false);
  const itemRef = useRef(null);
  const getTooltipPosition = () => {
    if (itemRef.current) {
      // Get the size and position of the sidebar item relative to the viewport
      const rect = itemRef.current.getBoundingClientRect();
      return {
        top: rect.top + rect.height / 2 + window.scrollY,
        left: rect.right + 12 + window.scrollX,
      };
    }
    return {};
  };

  return (
    <div
      ref={itemRef}
   
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
      onFocus={() => setShowLabel(true)}
      onBlur={() => setShowLabel(false)}
      className="flex items-center justify-center w-full h-full"
    >
      <NavLink
        to={route}
        className={({ isActive }) =>
          [
            "flex items-center gap-2 h-10 w-4/5 rounded-md transition-all",
            "justify-center",
            isActive ? "text-gray-900 shadow-sm font-extrabold bg-enabled" : "text-gray-500 hover:bg-hover hover:text-accent"
          ].join(" ")
        }
      >
        <div className="flex items-center justify-center w-10 h-full">
          <Icon icon={icon} size={size} />
        </div>
      </NavLink>

      <Portal>
        <div
          className={`
            fixed z-[9999] bg-white text-gray-900 rounded shadow text-sm whitespace-nowrap
            pointer-events-none
            transition-all duration-200 ease-out transform
            ${showLabel ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-2'}
            -translate-y-1/2
          `}
          style={{
            top: getTooltipPosition().top,
            left: getTooltipPosition().left,
            padding: '0.375rem 0.75rem', // Equivalent to Tailwind's py-1.5 px-3
          }}
          aria-hidden={!showLabel}
        >
          {label}
        </div>
      </Portal>
    </div>
  );
}

export default SidebarItem;