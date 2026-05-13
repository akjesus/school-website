import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { getNews } from "../api";


function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.data.news);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    
    fetchNews();
  }, []);

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <PageHero
        title="News & Events"
        subtitle="Stay updated with the latest announcements, school activities, and important updates."
      />

      {/* FEATURED POST */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 border-l-4 border-blue-700 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              📢 Featured Announcement
            </h2>

            <p className="text-gray-700">
              Admissions for the new academic session are now open. Apply early
              to secure a place.
            </p>
          </div>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {news.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
              whileHover={{ y: -6 }}
              onClick={() => setSelectedPost(post)}
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

                {/* CATEGORY */}
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {post.category}
                </span>

                {/* FEATURED BADGE */}
                {post.isFeatured && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                    Featured
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* META */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                  <span>
                    📅 {new Date(post.published_at).toLocaleDateString()}
                  </span>

                  <span>👤 {post.author_name || "Admin"}</span>

                  <span>👁️ {post.views} views</span>
                </div>

                {/* SUMMARY */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.summary}
                </p>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      post.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : post.status === "Draft"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {post.status}
                  </span>

                  <button className="text-blue-700 font-semibold hover:translate-x-1 transition">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="bg-white max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <div className="relative h-72 md:h-96 overflow-hidden">
                <img
                  src={selectedPost.featuredImage}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

                {/* CATEGORY */}
                <span className="absolute top-6 left-6 bg-blue-600 text-white text-xs px-4 py-2 rounded-full shadow-lg">
                  {selectedPost.category}
                </span>

                {/* FEATURED */}
                {selectedPost.isFeatured && (
                  <span className="absolute top-6 right-6 bg-yellow-400 text-black text-xs px-4 py-2 rounded-full font-semibold shadow-lg">
                    Featured
                  </span>
                )}

                {/* TITLE */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8">
                {/* META */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-4">
                  <span>
                    📅{" "}
                    {new Date(selectedPost.published_at).toLocaleDateString()}
                  </span>

                  <span>👤 {selectedPost.author_name || "Admin"}</span>

                  <span>👁️ {selectedPost.views} views</span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedPost.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : selectedPost.status === "Draft"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {selectedPost.status}
                  </span>
                </div>

                {/* SUMMARY */}
                {selectedPost.summary && (
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
                    <p className="text-blue-900 leading-relaxed font-medium">
                      {selectedPost.summary}
                    </p>
                  </div>
                )}

                {/* CONTENT */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </div>

                {/* FOOTER */}
                <div className="mt-10 flex items-center justify-between flex-wrap gap-4 border-t border-gray-100 pt-6">
                  <div className="text-sm text-gray-500">
                    Published{" "}
                    {selectedPost.published_at &&
                      new Date(selectedPost.published_at).toLocaleString()}
                  </div>

                  <button
                    onClick={() => setSelectedPost(null)}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl font-medium transition"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default News;
