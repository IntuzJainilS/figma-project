"use client";

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
  const labels = [
    "Jan", "", "", "",
    "Feb", "", "", "",
    "Mar", "", "", "",
    "Apr", "", "", "",
    "May", "", "", "",
    "Jun", "", "", "",
    "Jul", "", "", "",
    "Aug", "", "", "",
    "Sep", "", "", "",
    "Oct", "", "", "",
    "Nov", "", "", "",
    "Dec", "", "", "",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dashboard",
        data: Array.from({ length: 48 }, () => Math.floor(70 + Math.random() * 40)),
        backgroundColor: "#ef4444",
        barThickness: 3,
        categoryPercentage: 1.0,
        barPercentage: 1.0,
        borderRadius: 6,
      },
      {
        label: "SnowUI",
        data: Array.from({ length: 48 }, () => Math.floor(90 + Math.random() * 50)),
        backgroundColor: "#9ca3af",
        barThickness: 3,
        borderRadius: 6,
      },
      {
        label: "All",
        data: Array.from({ length: 48 }, () => Math.floor(120 + Math.random() * 60)),
        backgroundColor: "#111827",
        barThickness: 3,
        borderRadius: 6,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
       display:false,
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
        grid: { display: false },
        stacked: true,
        ticks: {
          autoSkip: false,
          maxRotation: 0,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow mt-10">
     <div className="flex items-center justify-between mb-4">
  <h3 className="text-red-500 font-medium">Product Traffic</h3>

  <div className="flex items-center gap-4">
    {/* RADIO */}
    <div className="flex items-center gap-4 text-sm text-gray-500">
      <label className="flex items-center gap-1 cursor-pointer">
        <span className="w-2 h-2 rounded-full bg-black"></span>
        All
      </label>

      <label className="flex items-center gap-1 cursor-pointer">
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        SnowUI
      </label>

      <label className="flex items-center gap-1 cursor-pointer">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        Dashboard
      </label>
    </div>

    {/* MENU */}
    <button className="p-2 rounded-lg hover:bg-gray-100">⋯</button>
  </div>
</div>


      <div className="h-65">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

