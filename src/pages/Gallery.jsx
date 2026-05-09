import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const images = [
  {
    id: 1,
    category: "Events",
    url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Classroom",
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Sports",
    url: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Lab",
    url: "https://images.unsplash.com/photo-1581092335397-9fa7c7c4d3d6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Events",
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Classroom",
    url: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop",
  },
];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", "Events", "Classroom", "Sports", "Lab"];

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <PageHero
        title="School Gallery"
        subtitle="Explore moments from our academic, sports, and extracurricular activities."
      />

      {/* FILTERS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border transition ${
                filter === cat
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.url}
                  alt=""
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
                  View Image
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.url}
            alt=""
            className="max-w-4xl w-full px-6"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
        </div>
      )}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {[
            { number: "500+", label: "Photos Captured" },
            { number: "50+", label: "School Events" },
            { number: "1,200+", label: "Students Featured" },
            { number: "10+", label: "Years Documented" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-4xl font-bold text-blue-700">
                {stat.number}
              </h2>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              School Life in Motion
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Experience life at our school through events, classrooms, sports,
              and student activities captured on video.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We believe learning goes beyond the classroom, and our media
              highlights reflect the vibrant energy of our students.
            </p>
          </div>

          {/* VIDEO */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-80"
              src="https://www.youtube.com/embed/5qap5aO4i9A"
              title="School Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">
            Campus Life Highlights
          </h2>

          <p className="text-gray-600 mt-3">
            Moments that define our school community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {[
            {
              title: "Sports Excellence",
              desc: "Students actively participate in inter-house sports competitions.",
              img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Academic Excellence",
              desc: "Modern classrooms that encourage interactive learning.",
              img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "School Events",
              desc: "Cultural days, graduation ceremonies, and special events.",
              img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img src={item.img} className="h-56 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery;
