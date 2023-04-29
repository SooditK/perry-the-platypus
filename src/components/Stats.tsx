const stats = [
  { name: "Carbon Footprint", stat: "2,412,314", pill: "-45%" },
  { name: "Emissions by Spinning", stat: "72,3694", pill: "-60%" },
  { name: "Emission By Transportation", stat: "361,874", pill: "0.00" },
  { name: "Emission by Carding", stat: "241,231", pill: "+0.06%" },
];

export default function Stats() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {item.stat}
            </dd>
            <dd className="mt-1 text-sm text-gray-400">CO2e</dd>
            <dd className="mt-1 text-sm font-medium text-gray-500">
              <span
                className={`mt-3 inline-flex rounded-full px-3 py-0.5 text-xs font-semibold leading-5 ${
                  item.pill.startsWith("-")
                    ? "bg-red-100 text-red-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {item.pill}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
