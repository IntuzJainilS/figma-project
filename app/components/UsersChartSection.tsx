"use client";

import graphicon from '@/public/graph.svg'
import downicon from '@/public/down.svg'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

const tabs = ["Users", "Projects", "Operating Status"];

export default function UsersChartSection() {
    const [activeTab, setActiveTab] = useState("Users");

    const data = {
        labels: ["Jan", "", "Feb", "", "Mar", "", "Apr", "", "May", "", "Jun", ""],
        datasets: [
            {
                data: [40, 38, 15, 30, 25, 40, 55, 35, 42, 60, 50, 55],
                borderColor: "#a855f7",
                borderWidth: 2,
                tension: 0,
                fill: true,
                backgroundColor: (context: any) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 250);
                    gradient.addColorStop(0, "rgba(168,85,247,0.25)");
                    gradient.addColorStop(1, "rgba(168,85,247,0)");
                    return gradient;
                },
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: "#000",
                pointBorderColor: "#fff",
                pointBorderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: { display: false },
            x: {
                grid: { display: false },
            },
        },
    };

    return (
        <div className="bg-white rounded-xl p-5 shadow mt-10">
            <div className="flex items-center justify-between mb-4">
                <div className="flex gap-6 text-sm">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 transition ${activeTab === tab
                                ? "text-purple-600 border-b-2 border-purple-600 font-medium"
                                : "text-gray-400"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <select className="border rounded-lg hidden md:block px-2 py-1 text-sm hover:bg-gray-200">
                        <option>Week</option>
                        <option>Month</option>
                        <option>Year</option>
                    </select>

                    {/* <select className="border rounded-lg hidden md:block px-2 py-1 text-sm hover:bg-gray-200">
                        <option className='bg-gray-300'>📈</option>
                        <option className='bg-gray-300'>📊</option>
                        <option className='bg-gray-300'>📉</option>
                    </select> */}

                     <select className="border rounded-lg hidden md:block px-2 py-1 text-sm hover:bg-gray-200">
                        <option >Graph 1</option>
                        <option >Graph 2</option>
                        <option >Graph 2</option>
                    </select>

                    {/* <button className="p-2 rounded hover:bg-gray-100">📈</button> */}
                    <button className="p-2 rounded hover:bg-gray-100">⋯</button>
                </div>
            </div>

            {/* CHART */}
            <div className="h-70">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}
