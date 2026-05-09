import AdminLayout from "./AdminLayout";
import { motion } from "framer-motion";
import { FaUsers, FaNewspaper, FaEye, FaChartLine } from "react-icons/fa";

function Dashboard() {
  const cards = [
    {
      title: "Total Students",
      value: "1,240",
      icon: FaUsers,
      color: "text-blue-700",
    },
    {
      title: "News Posts",
      value: "38",
      icon: FaNewspaper,
      color: "text-green-600",
    },
    {
      title: "Page Views",
      value: "12,430",
      icon: FaEye,
      color: "text-purple-600",
    },
    {
      title: "Engagement",
      value: "87%",
      icon: FaChartLine,
      color: "text-orange-500",
    },
  ];

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      {/* CARDS */}
      <div className="grid md:grid-cols-4 gap-6">
        {cards.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-sm border"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
                </div>

                <Icon className={`text-3xl ${item.color}`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CHART PLACEHOLDER */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm border">
        <h2 className="text-xl font-bold mb-4">Analytics Overview</h2>

        <div className="h-64 flex items-center justify-center text-gray-400">
          Chart Area (Will connect to real data later)
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
