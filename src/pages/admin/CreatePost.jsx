import { useState } from "react";
import AdminLayout from "./AdminLayout";
import { motion } from "framer-motion";

function CreatePost() {
  const [form, setForm] = useState({
    title: "",
    category: "News",
    content: "",
    status: "draft",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("POST DATA:", form);
    alert("Post saved (frontend only)");
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow space-y-4"
        >
          <input
            name="title"
            placeholder="Post Title"
            className="w-full border p-3 rounded-xl"
            onChange={handleChange}
          />

          <select
            name="category"
            className="w-full border p-3 rounded-xl"
            onChange={handleChange}
          >
            <option>News</option>
            <option>Events</option>
            <option>Exams</option>
            <option>Holidays</option>
          </select>

          <textarea
            name="content"
            placeholder="Write your post..."
            rows="8"
            className="w-full border p-3 rounded-xl"
            onChange={handleChange}
          />

          <select
            name="status"
            className="w-full border p-3 rounded-xl"
            onChange={handleChange}
          >
            <option value="draft">Save as Draft</option>
            <option value="published">Publish</option>
          </select>

          <button className="w-full bg-blue-700 text-white py-3 rounded-xl">
            Save Post
          </button>
        </motion.form>

        {/* LIVE PREVIEW */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 p-6 rounded-2xl border"
        >
          <h2 className="text-xl font-bold mb-4">Live Preview</h2>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {form.category}
            </span>

            <h3 className="text-xl font-bold mt-3">
              {form.title || "Post Title"}
            </h3>

            <p className="text-gray-500 mt-2">
              {form.content || "Post content will appear here..."}
            </p>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
}

export default CreatePost;