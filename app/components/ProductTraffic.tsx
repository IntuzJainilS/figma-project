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
  const data = {
    labels: [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec",
    ],
    datasets: [
      {
        label: "All",
        data: [120,140,130,150,170,160,155,165,175,160,150,145],
        backgroundColor: "#111827",
        barThickness: 3,
        borderRadius: 4,
      },
      {
        label: "SnowUI",
        data: [90,100,95,110,130,120,115,125,135,120,110,105],
        backgroundColor: "#d1d5db",
        barThickness: 3,
        borderRadius: 4,
      },
      {
        label: "Dashboard",
        data: [60,70,65,80,100,90,85,95,105,90,80,75],
        backgroundColor: "#ef4444",
        barThickness: 3,
        borderRadius: 4,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          boxWidth: 6,
        },
      },
      tooltip: {
        backgroundColor: "#111827",
        displayColors: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow mt-10">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-red-500 font-medium">
          Product Traffic
        </h3>

        <button className="p-2 rounded-lg hover:bg-gray-100">
          ⋯
        </button>
      </div>

      {/* CHART */}
      <div className="h-65">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
