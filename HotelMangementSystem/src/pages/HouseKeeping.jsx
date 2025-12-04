import React, { useState } from "react";

const HouseKeeping = () => {

  const initialRooms = [
    { number: "301", type: "SUITE", status: "occupied", assigned: "Rahul" },
    { number: "401", type: "SUITE", status: "vacant", assigned: "-" },
    { number: "501", type: "SUITE", status: "blocked", assigned: "-" },
    { number: "601", type: "SUITE", status: "dirty", assigned: "Nancy" },
    { number: "701", type: "SUITE", status: "outOfOrder", assigned: "-" },

    { number: "302", type: "DLX", status: "occupied", assigned: "Sagar" },
    { number: "402", type: "DLX", status: "billed", assigned: "-" },
    { number: "502", type: "DLX", status: "billed", assigned: "-" },
    { number: "602", type: "DLX", status: "vacant", assigned: "-" },
    { number: "702", type: "DLX", status: "billed", assigned: "-" },

    { number: "303", type: "EXEC", status: "occupied", assigned: "Rahul" },
    { number: "304", type: "EXEC", status: "vacant", assigned: "-" },
    { number: "305", type: "EXEC", status: "dirty", assigned: "Nancy" },
    { number: "306", type: "EXEC", status: "occupied", assigned: "-" },
    { number: "307", type: "EXEC", status: "outOfOrder", assigned: "-" },
    { number: "308", type: "EXEC", status: "blocked", assigned: "-" },
     { number: "403", type: "EXEC", status: "vacant", assigned: "-" },
    { number: "404", type: "EXEC", status: "dirty", assigned: "Nancy" },
    { number: "405", type: "EXEC", status: "occupied", assigned: "-" },
    { number: "406", type: "EXEC", status: "outOfOrder", assigned: "-" },
    { number: "407", type: "EXEC", status: "blocked", assigned: "-" },
     { number: "408", type: "EXEC", status: "vacant", assigned: "-" },
    { number: "503", type: "EXEC", status: "dirty", assigned: "Nancy" },
    { number: "504", type: "EXEC", status: "occupied", assigned: "-" },
    { number: "505", type: "EXEC", status: "outOfOrder", assigned: "-" },
    { number: "506", type: "EXEC", status: "blocked", assigned: "-" },
     { number: "507", type: "EXEC", status: "vacant", assigned: "-" },
    { number: "508", type: "EXEC", status: "dirty", assigned: "Nancy" },
    { number: "603", type: "EXEC", status: "occupied", assigned: "-" },
    { number: "604", type: "EXEC", status: "outOfOrder", assigned: "-" },
    { number: "605", type: "EXEC", status: "blocked", assigned: "-" },
     { number: "606", type: "EXEC", status: "vacant", assigned: "-" },
    { number: "607", type: "EXEC", status: "dirty", assigned: "Nancy" },
    { number: "608", type: "EXEC", status: "occupied", assigned: "-" },
    { number: "703", type: "EXEC", status: "outOfOrder", assigned: "-" },
    { number: "704", type: "EXEC", status: "blocked", assigned: "-" },
     { number: "705", type: "EXEC", status: "vacant", assigned: "-" },
    { number: "706", type: "EXEC", status: "dirty", assigned: "Nancy" },
    { number: "707", type: "EXEC", status: "occupied", assigned: "-" },
    { number: "708", type: "EXEC", status: "outOfOrder", assigned: "-" },
    
  ];


  const [rooms, setRooms] = useState(initialRooms);


  const statusColor = {
    occupied: "text-green-600 font-semibold",
    vacant: "text-gray-600 font-semibold",
    dirty: "text-red-600 font-semibold",
    billed: "text-blue-600 font-semibold",
    outOfOrder: "text-orange-600 font-semibold",
    blocked: "text-purple-600 font-semibold",
    "In-Progress": "text-yellow-600 font-semibold",
  };

  const updateStatus = (index, newStatus) => {
    const updated = [...rooms];
    updated[index].status = newStatus;
    setRooms(updated);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Housekeeping Status</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Room No</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Assigned To</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{room.number}</td>
                <td className="border px-4 py-2">{room.type}</td>

                <td className={`border px-4 py-2 ${statusColor[room.status]}`}>
                  {room.status}
                </td>

                <td className="border px-4 py-2">{room.assigned}</td>

                <td className="border px-4 py-2 space-x-2">
                  <button
                    onClick={() => updateStatus(index, "Clean")}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    Clean
                  </button>

                  <button
                    onClick={() => updateStatus(index, "dirty")}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Dirty
                  </button>

                  <button
                    onClick={() => updateStatus(index, "In-Progress")}
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                  >
                    Progress
                  </button>

                  <button
                    onClick={() => updateStatus(index, "outOfOrder")}
                    className="px-3 py-1 bg-gray-500 text-white rounded"
                  >
                    Out of Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseKeeping;
