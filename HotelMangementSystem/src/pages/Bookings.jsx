import React, { useState } from "react";
const Bookings = () => {
    
const [statusFilter, setStatusFilter] = useState("All");
  const summary = [
    { label: "Total Bookings", count: 120, color: "bg-blue-400" },
    { label: "Reserved", count: 50, color: "bg-yellow-400" },
    { label: "Confirmed", count: 26, color: "bg-green-400" },
    { label: "Pending", count: 30, color: "bg-purple-400" },
  ];
  const bookings = [
    {
      id: "#1001",
      name: "John Doe",
      roomType: "DLX",
      checkIn: "12/12/2025",
      checkOut: "14/12/2025",
      status: "Confirmed",
      payment: "Paid",
    },
    {
      id: "#1002",
      name: "Mary Ann",
      roomType: "EXEC",
      checkIn: "13/12/2025",
      checkOut: "15/12/2025",
      status: "Pending",
      payment: "Unpaid",
    },
    {
      id: "#1003",
      name: "Rakesh",
      roomType: "SUITE",
      checkIn: "11/12/2025",
      checkOut: "13/12/2025",
      status: "Checked-In",
      payment: "Paid",
    },
    {
      id: "#1004",
      name: "Samuel",
      roomType: "EXEC",
      checkIn: "10/12/2025",
      checkOut: "12/12/2025",
      status: "Cancelled",
      payment: "-",
    },
  ];
  const statusColors = {
    Confirmed: "bg-green-400",
    Pending: "bg-yellow-400",
    Cancelled: "bg-red-400",
    CheckedIn:"bg-blue-400"
  };

  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Bookings</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6 ">
          {summary.map((item) => (
            <div
              key={item.label}
              className={`p-4 rounded-xl text-white shadow ${item.color}`}
            >
              <p className="text-xl font-bold">{item.count}</p>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded-xl shadow mb-6 flex flex-wrap gap-4 items-center">
          <div>
            <label className="text-sm block mb-1">From Date</label>
            <input type="date" className="border px-3 py-2 rounded-lg" />
          </div>
          <div>
            <label className="text-sm block mb-1">To Date</label>
            <input type="date" className="border px-3 py-2 rounded-lg" />
          </div>
          <div>
            <label className="text-sm block mb-1">Status</label>
            <select className="border px-3 py-2 rounded-lg">
                 onChange={(e) => setStatusFilter(e.target.value)}
              <option>All</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Checked-In</option>
              <option>Checked-Out</option>
              <option>Cancelled</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search by name "
            className="border px-3 py-2 rounded-lg flex-1 min-w-180px  mt-5"
          />
        </div>
        <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Booking ID</th>
              <th className="p-2 text-left">Guest Name</th>
              <th className="p-2 text-left">Room</th>
              <th className="p-2 text-left">Check In</th>
              <th className="p-2 text-left">Check Out</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Payment</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings
              .filter((b) => statusFilter === "All" || b.status === statusFilter)
              .map((b) => (
                <tr key={b.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{b.id}</td>
                  <td className="p-2">{b.name}</td>
                  <td className="p-2">{b.roomType}</td>
                  <td className="p-2">{b.checkIn}</td>
                  <td className="p-2">{b.checkOut}</td>

                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${statusColors[b.status]}`}
                    >
                      {b.status}
                    </span>
                  </td>

                  <td className="p-2">{b.payment}</td>
                  <td className="p-2">
                    <button className="text-blue-600 font-medium">View</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Bookings;
