import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { FaPersonCircleMinus } from "react-icons/fa6";
import { LiaBroomSolid } from "react-icons/lia";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";


const Rooms = () => {
  const summary = [
    { label: "Occupied", count: 12, color: "bg-red-400" },
    { label: "Reserved", count: 0, color: "bg-blue-400" },
    { label: "Blocked", count: 0, color: "bg-gray-400" },
    { label: "Billed", count: 0, color: "bg-purple-400" },
    { label: "Vacant", count: 17, color: "bg-green-400" },
    { label: "Dirty", count: 23, color: "bg-cyan-400" },
    { label: "Out of Order", count: 1, color: "bg-gray-500" },
  ];

  const rooms = {
    SUITE: [
      { number: "301", status: "occupied" },
      { number: "401", status: "vacant" },
      { number: "501", status: "blocked" },
      { number: "601", status: "dirty" },
      { number: "701", status: "outOfOrder" },
    ],
    DLX: [
      { number: "302", status: "occupied" },
      { number: "402", status: "billed" },
      { number: "502", status: "billed" },
      { number: "602", status: "vacant" },
      { number: "702", status: "billed" },
    ],
    EXEC: [
      { number: "303", status: "occupied" },
      { number: "304", status: "vacant" },
      { number: "305", status: "dirty" },
      { number: "306", status: "occupied" },
      { number: "307", status: "outOfOrder" },
      { number: "308", status: "blocked" },
      { number: "403", status: "occupied" },
      { number: "404", status: "vacant" },
      { number: "405", status: "dirty" },
      { number: "406", status: "occupied" },
      { number: "407", status: "outOfOrder" },
      { number: "408", status: "blocked" },
      { number: "503", status: "occupied" },
      { number: "504", status: "vacant" },
      { number: "505", status: "dirty" },
      { number: "506", status: "occupied" },
      { number: "507", status: "outOfOrder" },
      { number: "508", status: "blocked" },
      { number: "603", status: "occupied" },
      { number: "604", status: "vacant" },
      { number: "605", status: "dirty" },
      { number: "606", status: "occupied" },
      { number: "607", status: "outOfOrder" },
      { number: "608", status: "blocked" },
      { number: "703", status: "occupied" },
      { number: "704", status: "vacant" },
      { number: "705", status: "dirty" },
      { number: "706", status: "occupied" },
      { number: "707", status: "outOfOrder" },
      { number: "708", status: "blocked" },
    ],
  };

  const statusColors = {
    occupied: "bg-red-300",
    reserved: "bg-blue-300",
    blocked: "bg-gray-300",
    billed: "bg-yellow-300",
    vacant: "bg-green-300",
    dirty: "bg-teal-300",
    outOfOrder: "bg-gray-400",
  };

  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">
        
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-6">
        {summary.map((item) => (
          <div
            key={item.label}
            className={`p-3 rounded-lg text-white flex flex-col items-center ${item.color}`}
          >
            <span className="text-xl font-semibold">{item.count}</span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>

      
      <div className="flex flex-wrap items-center gap-5 bg-white p-4 rounded-xl shadow mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Room Type wise
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="filter" /> Status wise
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="filter" /> Room No wise
        </label>

        <input
          type="text"
          placeholder="Search"
          className="border px-3 py-2 rounded-lg ml-auto"
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        {Object.keys(rooms).map((group) => (
          <div key={group} className="mb-8">
            <h3 className="text-lg font-semibold mb-4">{group}</h3>
            <div className="flex flex-wrap gap-3">
              {rooms[group].map((room, i) => (
                <div
                  key={i}
                  className={`px-6 py-3 rounded-lg shadow-sm ${statusColors[room.status]}`}
                >
                  {room.number}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    
      <div className="flex justify-around mt-6 bg-white p-4 rounded-xl shadow">
       <div className="flex justify-center items-center">
  <span className="text-sm flex items-center gap-2">
    <FaPersonCircleCheck />
    Check In
  </span>
</div>
        <div className="flex justify-center items-center">
          <span className="text-sm flex items-center gap-2"><FaPersonCircleMinus />
Check Out</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-sm flex items-center gap-2"><LiaBroomSolid />
Housekeeping</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-sm flex items-center gap-2"><FaHandHoldingDollar />
Billing</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-sm flex items-center gap-2"><LuFileSpreadsheet />
Reports</span>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
