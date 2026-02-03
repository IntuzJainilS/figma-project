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

      <div className="grid grid-cols-2 md:grid-cols-4 text-sm text-gray-400 px-4 mb-2">
        <span>Manager</span>
        <span className="hidden md:block">Date</span>  
        <span className="hidden md:block">Amount</span>
        <span className="text-right mr-10">Status</span>
      </div>

      <div className="space-y-2">
        {projects.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-2 md:grid-cols-4 items-center bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={item.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium truncate">{item.name}</span>
            </div>

            <span className="hidden md:block text-sm">{item.date}</span>

            <span className="hidden md:block text-sm font-semibold">{item.amount}</span>

            <div className="text-right">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
