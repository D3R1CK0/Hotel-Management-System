import React from 'react'

const Guests = () => {
      const rooms = [
    {
      roomNo: 301,
      status: "Occupied",
      guest: "John Doe",
      checkIn: "2025-12-03",
      checkOut: "2025-12-05",
    },
    {
      roomNo: 302,
      status: "Vacant",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
    {
      roomNo: 303,
      status: "Reserved",
      guest: "Anna Smith",
      checkIn: "2025-12-04",
      checkOut: "2025-12-06",
    },
    {
      roomNo: 304,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 305,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 306,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 307,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 308,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },{
      roomNo: 401,
      status: "Occupied",
      guest: "John Doe",
      checkIn: "2025-12-03",
      checkOut: "2025-12-05",
    },
    {
      roomNo: 402,
      status: "Vacant",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
    {
      roomNo: 403,
      status: "Reserved",
      guest: "Anna Smith",
      checkIn: "2025-12-04",
      checkOut: "2025-12-06",
    },
    {
      roomNo: 404,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 405,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 406,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 407,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 408,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },{
      roomNo: 501,
      status: "Occupied",
      guest: "John Doe",
      checkIn: "2025-12-03",
      checkOut: "2025-12-05",
    },
    {
      roomNo: 502,
      status: "Vacant",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
    {
      roomNo: 503,
      status: "Reserved",
      guest: "Anna Smith",
      checkIn: "2025-12-04",
      checkOut: "2025-12-06",
    },
    {
      roomNo: 504,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 505,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 506,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 507,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 508,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },{
      roomNo: 601,
      status: "Occupied",
      guest: "John Doe",
      checkIn: "2025-12-03",
      checkOut: "2025-12-05",
    },
    {
      roomNo: 602,
      status: "Vacant",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
    {
      roomNo: 603,
      status: "Reserved",
      guest: "Anna Smith",
      checkIn: "2025-12-04",
      checkOut: "2025-12-06",
    },
    {
      roomNo: 604,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 605,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 606,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 607,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 608,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },{
      roomNo: 701,
      status: "Occupied",
      guest: "John Doe",
      checkIn: "2025-12-03",
      checkOut: "2025-12-05",
    },
    {
      roomNo: 702,
      status: "Vacant",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
    {
      roomNo: 703,
      status: "Reserved",
      guest: "Anna Smith",
      checkIn: "2025-12-04",
      checkOut: "2025-12-06",
    },
    {
      roomNo: 704,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 705,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 706,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 707,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
     {
      roomNo: 708,
      status: "Blocked",
      guest: null,
      checkIn: null,
      checkOut: null,
    },
  ];

  const statusColor = {
    Occupied: "bg-green-500",
    Vacant: "bg-gray-300",
    Reserved: "bg-yellow-400",
    Blocked: "bg-red-500",
  };
  return (
     <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Room Occupancy Chart</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Room No</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Guest</th>
              <th className="border px-4 py-2 text-left">Check-in</th>
              <th className="border px-4 py-2 text-left">Check-out</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{room.roomNo}</td>

                <td className={`border px-4 py-2 ${statusColor[room.status]}`}>
                  {room.status}
                </td>

                <td className="border px-4 py-2">{room.guest}</td>
                <td className="border px-4 py-2">{room.checkIn}</td>
                <td className="border px-4 py-2">{room.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Guests