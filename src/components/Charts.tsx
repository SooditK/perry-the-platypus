import BarChart from "./Charts/BarChart";
import { DoughnutChart } from "./Charts/Doughnut";

export default function Charts() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-9">
        <div className="col-span-6 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <BarChart />
        </div>
        <div className="col-span-6 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:col-span-3 sm:p-6">
          <DoughnutChart />
        </div>
      </dl>
    </div>
  );
}
