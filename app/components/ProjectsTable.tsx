"use client";

import Image from "next/image";
import image1 from "../../public/tableicons/Andi Lane.svg"
import image2 from "../../public/tableicons/ByeWind.svg"
import image3 from "../../public/tableicons/Drew Cano.svg"
import image4 from "../../public/tableicons/Natali Craig.svg"
import image5 from "../../public/tableicons/Orlando Diggs.svg"


const projects = [
  {
    id: 1,
    name: "ByeWind",
    avatar: image2,
    date: "Jun 24, 2026",
    amount: "$942.00",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Natali Craig",
    avatar: image4,
    date: "Mar 10, 2026",
    amount: "$881.00",
    status: "Complete",
  },
  {
    id: 3,
    name: "Drew Cano",
    avatar: image3,
    date: "Nov 10, 2026",
    amount: "$409.00",
    status: "Pending",
  },
  {
    id: 4,
    name: "Orlando Digas",
    avatar: image5,
    date: "Dec 20, 2026",
    amount: "$953.00",
    status: "Approved",
  },
  {
    id: 5,
    name: "Andi Lane",
    avatar: image1,
    date: "Jul 25, 2026",
    amount: "$907.00",
    status: "Rejected",
  },
];

const statusStyles: Record<string, string> = {
  "In Progress": "bg-purple-100 text-purple-600",
  Complete: "bg-green-100 text-green-600",
  Pending: "bg-blue-100 text-blue-600",
  Approved: "bg-yellow-100 text-yellow-600",
  Rejected: "bg-gray-100 text-gray-500",
};

export default function ProjectsTable() {
  return (
  <div className="bg-white rounded-xl p-6 shadow mt-10">
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-teal-500 font-medium">Projects</h3>
      <button className="p-2 rounded-lg hover:bg-gray-100">⋯</button>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-2 table-fixed">
        {/* HEADER */}
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-left font-normal px-3 py-2">Manager</th>
            <th className="hidden md:table-cell text-left font-normal px-3 py-2">
              Date
            </th>
            <th className="hidden md:table-cell text-left font-normal px-3 py-2">
              Amount
            </th>
            <th className="text-right font-normal pr-15 px-3 py-2 w-30">Status</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {projects.map((item) => (
            <tr
              key={item.id}
              className="bg-gray-50 hover:bg-gray-100 transition rounded-lg"
            >
              <td className="px-3 py-3 rounded-l-lg">
                <div className="flex items-center gap-3 min-w-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium truncate">
                    {item.name}
                  </span>
                </div>
              </td>

              <td className="hidden md:table-cell px-3 py-3 text-sm whitespace-nowrap">
                {item.date}
              </td>

              <td className="hidden md:table-cell px-3 py-3 text-sm whitespace-nowrap">
                {item.amount}
              </td>

              <td className="px-3 py-3 rounded-r-lg">
                <span
                  className={`inline-flex justify-center min-w-24 text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

}
