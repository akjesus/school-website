import { motion } from "framer-motion";

function PageHero({ title, subtitle }) {
  return (
    <section className="bg-blue-900 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE */}
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          className="text-blue-100 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

export default PageHero;
