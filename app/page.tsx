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
      <aside className="hidden md:block shrink-0">
        <Sidebar />
      </aside>

      <main className="flex-1 w-full min-h-screen p-4 flex flex-col">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-4 mt-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className={`w-full p-6 rounded-xl bg-linear-to-r ${item.bg} text-white shadow flex flex-col`}
            >
              <div className="flex justify-between items-start">
                <p className="text-sm opacity-80 w-49 h-6 ">
                  {item.title}
                </p>
                <div className="flex text-right w-10 h-7 pt-0.5 pb-0.5 px-2">
                 <Image src={item.image} alt="icon" height={24} width={24} className="opacity-100" />
                </div>
               
              </div>


              <div className="flex justify-between items-end mt-4">
                <h2 className="text-2xl font-semibold leading-8">
                  {item.value}
                </h2>

                <p className="text-sm opacity-80">
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
