import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaNewspaper,
  FaPlus,
  FaUser,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

function AdminLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  const menu = [
    { name: "Dashboard", path: "/admin", icon: FaHome },
    { name: "Posts", path: "/admin/posts", icon: FaNewspaper },
    { name: "Create", path: "/admin/create", icon: FaPlus },
    { name: "Analytics", path: "/admin/analytics", icon: FaChartBar },
    { name: "Users", path: "/admin/users", icon: FaUser },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="w-72 bg-gradient-to-b from-blue-950 to-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-10 tracking-wide">School Admin</h1>

        <nav className="space-y-2">
          {menu.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href={item.path}
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 p-3 rounded-xl transition ${
                  location.pathname === item.path
                    ? "bg-blue-700"
                    : "hover:bg-blue-800/50"
                }`}
              >
                <Icon />
                {item.name}
              </motion.a>
            );
          })}
        </nav>

        <button
          onClick={logout}
          className="mt-12 flex items-center gap-3 text-red-300 hover:text-red-200"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <div className="flex-1">
        {/* TOPBAR */}
        <div className="bg-white shadow-sm p-4 flex justify-between items-center px-8">
          <input
            placeholder="Search..."
            className="border px-4 py-2 rounded-xl w-1/3"
          />

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-semibold">Admin</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-700"></div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
