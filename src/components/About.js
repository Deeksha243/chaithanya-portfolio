import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">About Me</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          I'm a self-taught developer passionate about building clean and
          interactive web apps using modern technologies like React and Tailwind CSS.
          I love solving problems and constantly learning new skills.
        </p>
      </motion.div>
    </section>
  );
}
