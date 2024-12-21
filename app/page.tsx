import {
  AlertTriangle,
  BarChart2,
  Clipboard,
  Plus,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="container mx-auto p-8 space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-700">Dashboard</h2>
        <div className="flex items-center gap-2">
          <Link
            href="/equipment/new"
            className="flex items-center text-white text-sm px-4 py-2 rounded-md bg-gray-900 hover:bg-gray-700 transition-colors"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Equipment
          </Link>
          <Link
            href="/record/new"
            className="flex items-center text-white text-sm px-4 py-2 rounded-md bg-gray-900 hover:bg-gray-700 transition-colors"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Record
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2 rounded-lg border shadow-sm bg-stone-50 p-6">
          <h2 className="text-2xl font-semibold">Equipment</h2>
          {[
            {
              logo: <Clipboard className="h-4 w-4 text-gray-500" />,
              text: "Total Equipment",
              value: 25,
              isBold: true,
            },
            {
              logo: <BarChart2 className="h-4 w-4 text-green-500" />,
              text: "Operational",
              value: 3,
              isBold: false,
            },
            {
              logo: <Wrench className="h-4 w-4 text-yellow-500" />,
              text: "Maintenance",
              value: 12,
              isBold: false,
            },
            {
              logo: <AlertTriangle className="h-4 w-4 text-red-500" />,
              text: "Down",
              value: 2,
              isBold: false,
            },
          ].map((e, i) => (
            <div
              key={i}
              className="flex flex-row items-center justify-between space-y-0"
            >
              <div className="flex items-center gap-4">
                {e.logo}
                <h3 className="tracking-tight text-sm font-medium">{e.text}</h3>
              </div>
              <div className={e.isBold ? "text-2xl font-bold" : "text-lg"}>
                {e.value}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 rounded-lg border shadow-sm bg-stone-50 p-6">
          <h2 className="text-2xl font-semibold">Records</h2>
          {[
            {
              logo: <Clipboard className="h-4 w-4 text-gray-500" />,
              text: "Total Records",
              value: 25,
              isBold: true,
            },
            {
              logo: <BarChart2 className="h-4 w-4 text-green-500" />,
              text: "Completed",
              value: 3,
              isBold: false,
            },
            {
              logo: <Wrench className="h-4 w-4 text-yellow-500" />,
              text: "Pending Parts",
              value: 12,
              isBold: false,
            },
            {
              logo: <AlertTriangle className="h-4 w-4 text-red-500" />,
              text: "Incomplete",
              value: 2,
              isBold: false,
            },
          ].map((e, i) => (
            <div
              key={i}
              className="flex flex-row items-center justify-between space-y-0"
            >
              <div className="flex items-center gap-4">
                {e.logo}
                <h3 className="tracking-tight text-sm font-medium">{e.text}</h3>
              </div>
              <div className={e.isBold ? "text-2xl font-bold" : "text-lg"}>
                {e.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg border shadow-sm bg-stone-50 space-y-4 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Recent Equipment
          </h3>
          <ul className="space-y-4 tracking-tight">
            <li>Machining Item #4</li>
            <li>Shipping Item #8</li>
            <li>Assembly Item #9</li>
          </ul>
        </div>
        <div className="rounded-lg border shadow-sm bg-stone-50 space-y-4 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Recent Records
          </h3>
          <ul className="space-y-4 tracking-tight">
            <li>Assembly change for Equipment #5</li>
            <li>Packaging for Equipment #12</li>
            <li>Shipping record for Equipment #8</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
