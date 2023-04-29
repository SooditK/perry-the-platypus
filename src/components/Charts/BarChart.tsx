import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: false,
      text: "Carbon Footprint",
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
  backgroundColor: "#f8f8f8",
  borderColor: "#ddd",
  borderWidth: 1,
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Spinning",
      data: labels.map(() => faker.datatype.number({ min: 10000, max: 30000 })),
      backgroundColor: "lightgreen",
    },
    {
      label: "Transportation",
      data: labels.map(() => faker.datatype.number({ min: 5000, max: 15000 })),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Carding",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 10000 })),
      backgroundColor: "yellow",
    },
    {
      label: "Heating & Cooling",
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 10000 })),
      backgroundColor: "orange",
    },
  ],
};

export default function BarChart() {
  return (
    <>
      <div className="mb-6 flex flex-col justify-between md:flex-row">
        <h3 className="text-lg font-bold leading-6 text-gray-900">
          Carbon Footprint
        </h3>
        <div className="flex flex-col justify-end md:flex-row md:items-center">
          <div className="ml-5 h-3 w-3 flex-shrink-0 rounded-full bg-green-500 p-2" />
          <span className="ml-2 flex-shrink-0 text-sm text-slate-600">
            Spinning
          </span>
          <div className="ml-5 h-3 w-3 flex-shrink-0 rounded-full bg-blue-500 p-2" />
          <span className="ml-2 flex-shrink-0 text-sm text-slate-600">
            Transportation
          </span>
          <div className="ml-5 h-3 w-3 flex-shrink-0 rounded-full bg-yellow-500 p-2" />
          <span className="ml-2 flex-shrink-0 text-sm text-slate-600">
            Carding
          </span>
          <div className="ml-5 h-3 w-3 flex-shrink-0 rounded-full bg-orange-500 p-2" />
          <span className="ml-2 flex-shrink-0 text-sm text-slate-600">
            Heating & Cooling
          </span>
        </div>
      </div>
      <Bar options={options} data={data} />
    </>
  );
}
