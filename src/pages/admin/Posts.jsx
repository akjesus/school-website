import { useState } from "react";
import AdminLayout from "./AdminLayout";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

function Posts() {
  const [search, setSearch] = useState("");

  const posts = [
    {
      id: 1,
      title: "First Term Exams Begin",
      category: "Exams",
      status: "published",
      date: "2026-05-10",
    },
    {
      id: 2,
      title: "Sports Day Announcement",
      category: "Events",
      status: "draft",
      date: "2026-05-05",
    },
    {
      id: 3,
      title: "Mid-Term Break Notice",
      category: "Holidays",
      status: "published",
      date: "2026-04-28",
    },
  ];

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">News & Events</h1>

        <input
          placeholder="Search posts..."
          className="border px-4 py-2 rounded-xl w-72"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-sm border p-6"
            >
              {/* CATEGORY + STATUS */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {post.category}
                </span>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    post.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {post.status}
                </span>
              </div>

              {/* TITLE */}
              <h2 className="text-lg font-bold mb-2">{post.title}</h2>

              <p className="text-gray-500 text-sm mb-4">{post.date}</p>

              {/* ACTIONS */}
              <div className="flex justify-between items-center">
                <button className="text-blue-600 flex items-center gap-1">
                  <FaEye /> Preview
                </button>

                <div className="flex gap-3">
                  <button className="text-blue-600">
                    <FaEdit />
                  </button>

                  <button className="text-red-600">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AdminLayout>
  );
}

export default Posts;
