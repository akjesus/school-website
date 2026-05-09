import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // MOCK AUTH (backend later)
    if (form.email && form.password) {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* EMAIL */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              name="email"
              placeholder="Email"
              className="w-full pl-10 border p-3 rounded-xl"
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full pl-10 border p-3 rounded-xl"
              onChange={handleChange}
            />
          </div>

          <button className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
            Login
          </button>
          <button
            onClick={() => navigate("/")}
            type="button"
            className="w-full bg-gray-400 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Go Home
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
