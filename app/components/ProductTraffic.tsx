"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ProductTraffic() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const monthLabels = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec",
  ];

  const weekLabels = [
    "Jan","","","",
    "Feb","","","",
    "Mar","","","",
    "Apr","","","",
    "May","","","",
    "Jun","","","",
    "Jul","","","",
    "Aug","","","",
    "Sep","","","",
    "Oct","","","",
    "Nov","","","",
    "Dec","","","",
  ];

  const labels = isMobile ? monthLabels : weekLabels;
  const points = isMobile ? 12 : 48;

  const data = {
    labels,
    datasets: [
      {
        label: "Dashboard",
        data: Array.from({ length: points }, () => Math.floor(70 + Math.random() * 40)),
        backgroundColor: "#ef4444",
        barThickness: isMobile ? 2 : 3,
        borderRadius: 6,
      },
      {
        label: "SnowUI",
        data: Array.from({ length: points }, () => Math.floor(90 + Math.random() * 50)),
        backgroundColor: "#9ca3af",
        barThickness: isMobile ? 2 : 3,
        borderRadius: 6,
      },
      {
        label: "All",
        data: Array.from({ length: points }, () => Math.floor(120 + Math.random() * 60)),
        backgroundColor: "#111827",
        barThickness: isMobile ? 2 : 3,
        borderRadius: 6,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#111827",
        displayColors: false,
      },
    },
    scales: {
      y: {
        display: false,
        stacked: true,
      },
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          autoSkip: true,
          maxRotation: 0,
          minRotation: 0,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow mt-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <h3 className="text-red-500 font-medium">Product Traffic</h3>

        <div className="flex items-center justify-between md:justify-end gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <label className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              All
            </label>
            <label className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              SnowUI
            </label>
            <label className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Dashboard
            </label>
          </div>

          <button className="p-2 rounded-lg hover:bg-gray-100">⋯</button>
        </div>
      </div>

      <div className="h-65">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
