"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductTraffic from "./components/ProductTraffic";
import DeviceLocationTraffic from "./components/DeviceLocationTraffic";
import Sidebar from "./components/Sidebar";
import UsersChartSection from "./components/UsersChartSection";

const stats = [
  {
    title: "Views",
    value: "7,265",
    change: "+11.01%",
    bg: "from-blue-500 to-blue-400",
  },
  {
    title: "Visits",
    value: "3,671",
    change: "-0.03%",
    bg: "from-gray-900 to-gray-700",
  },
  {
    title: "New Users",
    value: "256",
    change: "+15.03%",
    bg: "from-blue-500 to-blue-400",
  },
  {
    title: "Active Users",
    value: "2,318",
    change: "+6.08%",
    bg: "from-gray-900 to-gray-700",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* SIDEBAR */}
      <aside className="shrink-0">
        <Sidebar />
      </aside>

      <main className="flex-1 w-full min-h-screen p-4 flex flex-col">
        <Header/>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full min-w-68 h-25 gap-4 mt-2">
          {stats.map((item) => (
            <div
              key={item.title}
              className={`w-full p-6 rounded-xl bg-linear-to-r ${item.bg} text-white shadow flex flex-col`}
            >
              <p className="text-sm opacity-80 w-49 h-6 size-4">{item.title}</p>

              <div className=" flex justify-between items-baseline mt-auto text-right">
                <h2 className="text-2xl font-semibold text-left leading-8 w-46 h-9 size-6">
                  {item.value}
                </h2>
                <p className="text-sm opacity-80 w-14 h-6">
                  {item.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <UsersChartSection />
        <DeviceLocationTraffic/>
        <ProductTraffic/>
        <Footer/>
      </main>
    </div>
  );
}
