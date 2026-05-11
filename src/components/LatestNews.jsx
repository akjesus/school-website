import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaArrowRight, FaTimes } from "react-icons/fa";
const LatestNews = () => {
    const [selectedNews, setSelectedNews] = useState(null);
  // DUMMY API DATA
  const news = [
    {
      id: 1,
      title: "Inter-House Sports Competition Begins Next Week",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      date: "May 10, 2026",
      category: "Sports",
      excerpt:
        "Students across all houses are preparing for the annual inter-house sports competition.",
      content:
        "The annual inter-house sports competition will begin next week Monday with exciting activities including track events, football competitions, cultural displays, and athletic contests. Students are encouraged to participate actively and support their houses.",
    },

    {
      id: 2,
      title: "WAEC Mock Examination Timetable Released",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      date: "May 08, 2026",
      category: "Academics",
      excerpt:
        "The school management has officially released the WAEC mock examination schedule.",
      content:
        "The school management has officially released the WAEC mock examination schedule for the upcoming academic year.",
    },

    {
      id: 3,
      title: "New ICT Laboratory Commissioned",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      date: "May 05, 2026",
      category: "Technology",
      excerpt:
        "Our newly equipped ICT laboratory is now open for student practical sessions.",
      content:
        "Our newly equipped ICT laboratory is now open for student practical sessions.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-700 font-semibold uppercase tracking-widest"
            >
              School Updates
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mt-3"
            >
              Latest News & Events
            </motion.h2>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-blue-700 font-semibold"
          >
            View All News
            <FaArrowRight />
          </motion.button>
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCalendarAlt />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {item.excerpt}
                </p>

                <button
                  onClick={() => setSelectedNews(item)}
                  className="flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-5 right-5 z-20 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center"
              >
                <FaTimes />
              </button>

              {/* IMAGE */}
              <div className="h-72 md:h-96 overflow-hidden">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
                    {selectedNews.category}
                  </span>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaCalendarAlt />
                    {selectedNews.date}
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {selectedNews.title}
                </h2>

                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>{selectedNews.content}</p>

                  <p>
                    Our school remains committed to academic excellence,
                    leadership development, and holistic student growth. More
                    activities and updates will continue throughout the term.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LatestNews;
