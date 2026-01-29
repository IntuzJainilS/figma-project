"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function DeviceLocationTraffic() {
  const deviceData = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        data: [120, 180, 140, 200, 243, 110],
        backgroundColor: [
          "#f3f4f6",
          "#f3f4f6",
          "#f3f4f6",
          "#f3f4f6",
          "#3b82f6",
          "#f3f4f6",
        ],
        borderRadius: 10,
        barThickness: 40,
      },
    ],
  };

  const locationData = {
    labels: ["US", "Canada", "Mexico", "China", "Japan", "Australia"],
    datasets: [
      {
        data: [180, 220, 200, 120, 260, 190],
        backgroundColor: "#f3f4f6",
        borderRadius: 10,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111827",
        padding: 8,
        displayColors: false,
        callbacks: {
          label: (ctx: any) => `${ctx.raw}K`,
        },
      },
    },
    scales: {
      y: { display: false },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
      {/* DEVICE */}
      <div className="bg-white p-5 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[18px] font-semibold leading-7 text-blue-500">Device Traffic</h3>
          <button className="p-2 rounded-lg hover:bg-gray-100">⋯</button>
        </div>

        <div className="h-55">
          <Bar data={deviceData} options={options} />
        </div>
      </div>

      {/* LOCATION */}
      <div className="bg-white p-5 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="leading-7 text-[18px] text-green-500 font-semibold">Location Traffic</h3>
          <button className="p-2 rounded-lg hover:bg-gray-100">⋯</button>
        </div>

        <div className="h-55">
          <Bar data={locationData} options={options} />
        </div>
      </div>
    </div>
  );
}
