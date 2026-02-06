"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductTraffic from "./components/ProductTraffic";
import DeviceLocationTraffic from "./components/DeviceLocationTraffic";
import Sidebar from "./components/Sidebar";
import UsersChartSection from "./components/UsersChartSection";
import ProjectsTable from "./components/ProjectsTable";
import Image from "next/image";
import icon from "../public/Icon.svg"
import icon2 from "../public/downwards.svg"

const stats = [
  {
    title: "Views",
    value: "7,265",
    change: "+11.01%",
    image: icon,
    bg: "from-blue-500 to-blue-400",
  },
  {
    title: "Visits",
    value: "3,671",
    change: "-0.03%",
    image: icon2,
    bg: "from-gray-900 to-gray-700",
  },
  {
    title: "New Users",
    value: "256",
    change: "+15.03%",
    image: icon,
    bg: "from-blue-500 to-blue-400",
  },
  {
    title: "Active Users",
    value: "2,318",
    change: "+6.08%",
    image: icon,
    bg: "from-gray-900 to-gray-700",
  },
];
// width = 396
export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-gray-100 overflow-x-hidden">
      {/* SIDEBAR */}
      <aside className="hidden md:block shrink-0 min-w-0">
        <Sidebar />
      </aside>

      <main className="flex-1 min-w-0 w-full min-h-screen p-4 flex flex-col">
        <Header />
        <p className="text-center md:hidden font-bold">Overview</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 w-full mt-4 place-items-center">
          {stats.map((item) => (
            <div
              key={item.title}
              className={`w-full h-23 sm:w-full sm:h-auto p-4 sm:p-6 rounded-3xl bg-linear-to-b ${item.bg} text-white shadow flex flex-col`}>
              <div className="flex justify-between items-start">
                <p className="text-sm opacity-80 w-49 h-6 ">
                  {item.title}
                </p>
                <div className="flex justify-end items-center shrink-0 ml-2">
                  <Image src={item.image} alt="icon" height={28} width={38} className="opacity-100" />
                </div>
              </div>
              <div className="flex justify-between items-end mt-4">
                <h2 className="text-lg sm:text-2xl font-semibold leading-tight">
                  {item.value}
                </h2>

                <p className="text-xs sm:text-sm opacity-80">
                  {item.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <UsersChartSection />
        <DeviceLocationTraffic />
        <ProductTraffic />
        <ProjectsTable />
        <Footer />
      </main>
    </div>
  );
}
