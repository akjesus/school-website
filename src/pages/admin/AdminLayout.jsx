import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import {
  FaHome,
  FaNewspaper,
  FaPlus,
  FaUser,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

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
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-72 bg-gradient-to-b from-blue-950 to-blue-900 text-white p-6 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold">School Admin</h1>

          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* MENU */}
        <nav className="space-y-2">
          {menu.map((item, i) => {
            const Icon = item.icon;

            return (
              <Link
                key={i}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-xl transition ${
                  location.pathname === item.path
                    ? "bg-blue-700"
                    : "hover:bg-blue-800/50"
                }`}
              >
                <Icon />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="mt-12 flex items-center gap-3 text-red-300 hover:text-red-200"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <div className="flex-1 w-full">
        {/* TOPBAR */}
        <div className="bg-white shadow-sm px-4 md:px-8 py-4 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-xl" onClick={() => setOpen(true)}>
              <FaBars />
            </button>

            <input
              placeholder="Search..."
              className="hidden md:block border px-4 py-2 rounded-xl w-72"
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="font-semibold">Admin</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-700"></div>
          </div>
        </div>

        {/* PAGE */}
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
