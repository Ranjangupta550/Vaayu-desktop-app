// import {
//   House,
//   // MapPinSimple,
//   Target,
//   Airplane,        // ✅ Replacing 'Drone'
//   Package,
//   ChartLineUp,
//   Gear,
//   MapPinSimpleArea, // ✅ Added for 'Live Mission'
// } from "phosphor-react";
import {  House,
  MapPin,
Send,
  Package,
  ChartArea,
  User,
  Settings,
  Waypoints,
  } from "lucide-react";
const sidebarConfig = [
  {
    label: "Dashboard",
    route: "/",
    icon: House,
  },
  {
    label: "Live Mission",
    route: "/live-mission",
    icon: MapPin,
  },
  {
    label: "Mission Plan",
    route: "/mission-plan",
    icon: Waypoints, // ✅ FIXED: Replaced 'Target' with 'Waypoints'
  },
  {
    label: "Mission Execution",
    route: "/mission-execution",
    icon: Send,   // ✅ FIXED
  },
  {
    label: "Inventory",
    route: "/inventory",
    icon: Package,
  },
  {
    label: "Statistics",
    route: "/statistics",
    icon: ChartArea,
  },
  {
    label: "Settings",
    route: "/settings",
    icon: Settings,
  },
  {
    label: "User",
    route: "/user",
    icon: User, // You can replace this with an appropriate icon
  }
];

export default sidebarConfig;
