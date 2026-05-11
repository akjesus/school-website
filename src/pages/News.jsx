import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const posts = [
  {
    id: 1,
    title: "ADMISSION INTO JS 1, JS 2 and SS 1 FOR 2026/2027 ACADEMIC SESSION",
    category: "Admissions",
    date: "May 11, 2026",
    author: "School Admin",
    content: `Applications are open for suitably qualified candidates for admission into JS 1 JS 2 and SS 1 for 2026/2027 Academic Session.

The admission form is Ten thousand naira (N10,000.00) only payable into:
SAMUEL MADUKA ONYISHI FOUNDATION
(MUC main account)
1012682217
Keystone Bank

Entrance Exam holds on Saturday May 23rd 2026
10 am
Virtual Exam option is available.`,
  },
  {
    id: 2,
    title: "Inter-House Sports Competition",
    category: "Events",
    date: "May 5, 2026",
    author: "Sports Department",
    content:
      `The annual inter-house sports competition will hold at the school sports ground.`,
  },
  {
    id: 3,
    title: "Mid-Term Break Announcement",
    category: "Holidays",
    date: "April 28, 2026",
    author: "Principal Office",
    content: "The school will proceed on mid-term break from Friday to Monday.",
  },
  {
    id: 4,
    title: "Admission Form Now Available",
    category: "News",
    date: "April 20, 2026",
    author: "Admissions Office",
    content:
      "Prospective students can now apply for admission into JSS1 and SSS1.",
  },
];

function News() {
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
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold mt-4 mb-2">{post.title}</h3>

                <p className="text-gray-500 text-sm mb-3">
                  {post.date} • {post.author}
                </p>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.content}
                </p>

                <button className="mt-4 text-blue-700 font-semibold">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="bg-white max-w-xl w-full p-8 rounded-3xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {selectedPost.category}
              </span>

              <h2 className="text-2xl font-bold mt-4 mb-2">
                {selectedPost.title}
              </h2>

              <p className="text-gray-500 text-sm mb-4">
                {selectedPost.date} • {selectedPost.author}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {selectedPost.content}
              </p>

              <button
                onClick={() => setSelectedPost(null)}
                className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-xl"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default News;
