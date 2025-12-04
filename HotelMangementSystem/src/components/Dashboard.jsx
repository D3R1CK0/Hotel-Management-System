import React from 'react'
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CiCirclePlus } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";



const data = [
  { day: "Mon", bookings: 12 },
  { day: "Tue", bookings: 14 },
  { day: "Wed", bookings: 18 },
  { day: "Thu", bookings: 22 },
  { day: "Fri", bookings: 16 },
  { day: "Sat", bookings: 10 },
  { day: "Sun", bookings: 4 },
];

const Dashboard = () => {
  return (
    <div>
        <div className="p-6 space-y-6 bg-[#f5f7fb] min-h-screen">

 
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-[#41c28c] text-white p-6 rounded-xl shadow-lg">
          <p className="opacity-90">Total Rooms</p>
          <h2 className="text-3xl font-bold">40</h2>
        </div>

        <div className="bg-[#f4b740] text-white p-6 rounded-xl shadow-lg">
          <p className="opacity-90">Occupied</p>
          <h2 className="text-3xl font-bold">15</h2>
        </div>

        <div className="bg-[#8ab8ff] text-white p-6 rounded-xl shadow-lg">
          <p className="opacity-90">Available</p>
          <h2 className="text-3xl font-bold">35</h2>
        </div>

        <div className="bg-[#ff6b6b] text-white p-6 rounded-xl shadow-lg">
          <p className="opacity-90">Bookings Today</p>
          <h2 className="text-3xl font-bold">8</h2>
        </div>

      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


        <div className="bg-white p-6 rounded-xl shadow-lg lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Bookings Overview</h2>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <Tooltip />
              <Bar dataKey="bookings" fill="#1d006e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Room Status</h2>

          <div className="grid grid-cols-3 gap-4">

            <div className="bg-[#41c28c] text-white p-4 rounded-xl text-center">
              <p>Available</p>
              <h3 className="text-2xl font-bold">20</h3>
            </div>

            <div className="bg-[#ff6b6b] text-white p-4 rounded-xl text-center">
              <p>Occupied</p>
              <h3 className="text-2xl font-bold">15</h3>
            </div>

            <div className="bg-[#f4b740] text-white p-4 rounded-xl text-center">
              <p>Cleaning</p>
              <h3 className="text-2xl font-bold">10</h3>
            </div>

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-lg lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="pb-2">Guest Name</th>
                <th className="pb-2">Room</th>
                <th className="pb-2">Check-In</th>
                <th className="pb-2">Check-Out</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-2">John Doe</td>
                <td>303</td>
                <td>9/11/22</td>
                <td>11/09/22</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Jane Smith</td>
                <td>705</td>
                <td>10/25/21</td>
                <td>11/10/22</td>
              </tr>

              <tr>
                <td className="py-2">David Kim</td>
                <td>308</td>
                <td>8/25/21</td>
                <td>11/28/22</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

          <div className="space-y-4">

            <button className="w-full flex items-center gap-3 p-3 bg-blue-100 rounded-lg">
              <span className="text-blue-700 text-xl"><CiCirclePlus /></span>
              New Booking
            </button>

            <button className="w-full flex items-center gap-3 p-3 bg-purple-100 rounded-lg">
              <span className="text-purple-700 text-xl"><FaUserAlt /></span>
              New Guest
            </button>

            <button className="w-full flex items-center gap-3 p-3 bg-green-100 rounded-lg">
              <span className="text-green-700 text-xl"><BsCashCoin /></span>
              Generate Invoice
            </button>

          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Dashboard