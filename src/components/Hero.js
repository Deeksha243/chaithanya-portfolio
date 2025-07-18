import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-indigo-700 mb-4">
          Hi, I'm Chaithanya
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          final year diploma student in computer science
        </p>
        <a
          href="#projects"
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700"
        >
          See My Work
        </a>
      </motion.div>
    </section>
  );
}
