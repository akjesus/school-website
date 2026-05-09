import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#062E70] font-semibold border-b-2 border-[#062E70] pb-1"
      : "text-gray-700 hover:text-[#062E70] transition";

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Academics",
      path: "/academics",
    },
    {
      name: "Admissions",
      path: "/admissions",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="backdrop-blur-xl bg-white/80 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* LOGO */}
              <a href="/">
                <div className="flex items-center gap-3">
                  <div className="bg-[#062E70] p-2 rounded-xl">
                    <img src="/logo.jpg" alt="Logo" className="h-10 w-10" />
                  </div>

                  <div>
                    <h1 className="text-xl md:text-2xl font-bold text-[#062E70]">
                      Maduka University College
                    </h1>

                    <p className="text-xs text-gray-500 hidden sm:block">
                      Education for Global Competitiveness
                    </p>
                  </div>
                </div>
              </a>
              {/* DESKTOP MENU */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <NavLink key={index} to={link.path} className={linkClass}>
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* DESKTOP BUTTON */}
              <div className="hidden lg:block">
                <button className="bg-[#062E70] hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-medium transition duration-300 shadow-lg hover:shadow-xl">
                  Apply Now
                </button>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden bg-gray-100 p-2 rounded-xl"
              >
                {mobileMenu ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-b border-gray-200 shadow-xl">
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#062E70] font-semibold"
                      : "text-gray-700 hover:text-[#062E70] transition text-lg"
                  }
                  onClick={() => setMobileMenu(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              <button className="mt-4 bg-[#062E70] hover:bg-blue-800 text-white py-3 rounded-xl font-medium transition">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* NAVBAR SPACER */}
      <div className="h-20"></div>
    </>
  );
}
