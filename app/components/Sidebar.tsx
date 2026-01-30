"use client";

import Image from "next/image";
import { useState } from "react";
import snowuilogo from "../../public/sidebaricons/SnowUI Logo.svg"
import Byewind from "../../public/sidebaricons/AvatarByewind.svg"

const menuItems = [
  { name: "overview", icon: "/sidebaricons/ChartPieSlice.svg" },
  { name: "ecommerce", icon: "/sidebaricons/ShoppingBagOpen.svg" },
  { name: "projects", icon: "/sidebaricons/FolderNotch.svg" },
  { name: "User Profile", icon: "/sidebaricons/IdentificationBadge.svg" },
  { name: "Account", icon: "/sidebaricons/IdentificationCard.svg" },
  { name: "Corporate", icon: "/sidebaricons/UsersThree.svg" },
  { name: "Blog", icon: "/sidebaricons/Notebook.svg" },
  { name: "Social", icon: "/sidebaricons/ChatsTeardrop.svg" }
];

export default function Page() {
  const [active, setActive] = useState("Overview");

  return (
    <div className="flex h-full">
      <aside className="w-64 h-full bg-gray-100 px-4 py-6 flex flex-col">
        <div className="flex items-center gap-2 px-2 mb-8">
          <Image src={snowuilogo} alt="Logo" height={32} width={119} loading="eager" />
        </div>

        {/* sidebar menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                ${active === item.name
                  ? "bg-gray-100 font-medium"
                  : "text-black hover:bg-gray-50"
                }
              `}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
              />
              {item.name}
            </button>
          ))}
        </nav>
        <div className=" flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer mt-auto">
          <Image className="rounded-full" src={Byewind} width={32} height={32} alt="profile" />
          <p className="text-sm font-medium text-black">ByeWind</p>
        </div>
      </aside>

    </div>
  );
}
