import React, { useState } from "react";
import {
  HiHome,
  HiOfficeBuilding,
  HiCalendar,
  HiUserGroup,
  HiClipboardList,
  HiCash,
  HiCog,
} from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

import { NavLink } from "react-router-dom";

const Navigation = ({ forceExpand = false }) => {
  const [expanded, setExpanded] = useState(false);
  const [responsiveMD, SetResponsiveMd] = useState(false);
  const isExpanded = forceExpand ? true : expanded;

  const menuItems = [
    { name: "Dashboard", icon: <HiHome />, path: "/home" },
    { name: "Rooms", icon: <HiOfficeBuilding />, path: "/rooms" },
    { name: "Bookings", icon: <HiCalendar />, path: "/bookings" },
    { name: "Guests", icon: <HiUserGroup />, path: "/guests" },
    { name: "Housekeeping", icon: <HiClipboardList />, path: "/housekeeping" },
    { name: "Billing", icon: <HiCash />, path: "/billing" },
    { name: "Settings", icon: <HiCog />, path: "/settings" },
  ];
  return (
    <div
      onMouseEnter={() => !forceExpand && setExpanded(true)}
      onMouseLeave={() => !forceExpand && setExpanded(false)}
      className={`h-full bg-[#1d006e] text-white p-4 transition-all duration-300 
     ${isExpanded ? "w-60" : "w-20"}`}
    >
      <div className="flex items-center gap-3 mb-8">
        {isExpanded && (
          <h1 className="text-xl font-semibold">Hotel Management</h1>
        )}
      </div>
      <div className="lg:hidden mb-5 ms-3">
        <button onClick={()=>{
          SetResponsiveMd(true)
        }}>
          <RxHamburgerMenu />
        </button>
      </div>
      
      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-lg transition-all 
              ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
            }
          >
            {item.icon}
            {isExpanded && <span className="text-sm">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
      
    </div>
  );
};

export default Navigation;
