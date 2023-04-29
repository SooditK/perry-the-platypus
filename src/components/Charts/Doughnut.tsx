import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [22, 16, 27, 35],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
};

export function DoughnutChart() {
  return (
    <>
      <div className="align-center flex h-64 w-full justify-center">
        <Doughnut data={data} options={options} />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold leading-6 text-gray-900">
          Carbon Footprint
        </h3>
        <div className="flex max-w-xs flex-col justify-end gap-y-3 md:items-center">
          <div className="ml-5 flex max-w-[16rem] items-center justify-center gap-x-1 sm:w-full">
            <div className="h-3 w-3 flex-shrink-0 rounded-full bg-red-500 p-2" />
            <span className="text-sm text-gray-500">Spinning</span>
            <div className="flex-grow" />
            <span className="text-sm text-gray-500">22%</span>
          </div>
          <div className="ml-5 flex max-w-[16rem] items-center justify-center gap-x-1 sm:w-full">
            <div className="h-3 w-3 flex-shrink-0 rounded-full bg-blue-500 p-2" />
            <span className="text-sm text-gray-500">Transportation</span>
            <div className="flex-grow" />
            <span className="text-sm text-gray-500">16%</span>
          </div>
          <div className="ml-5 flex max-w-[16rem] items-center justify-center gap-x-1 sm:w-full">
            <div className="h-3 w-3 flex-shrink-0 rounded-full bg-yellow-500 p-2" />
            <span className="text-sm text-gray-500">Carding</span>
            <div className="flex-grow" />
            <span className="text-sm text-gray-500">27%</span>
          </div>
          <div className="ml-5 flex max-w-[16rem] items-center justify-center gap-x-1 sm:w-full">
            <div className="h-3 w-3 flex-shrink-0 rounded-full bg-green-500 p-2" />
            <span className="text-sm text-gray-500">Heating & Carding</span>
            <div className="flex-grow" />
            <span className="text-sm text-gray-500">35%</span>
          </div>
        </div>
      </div>
    </>
  );
}
