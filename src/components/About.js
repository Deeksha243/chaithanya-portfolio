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
          I am a final-year Diploma student in Computer Science Engineering at Karnataka Polytechnic (KPT), Mangalore. Over the course of my diploma program, I have developed a strong foundation in core computer science subjects such as programming, database management, computer networks, data structures, web development, and software engineering.

My academic journey at KPT has equipped me with both theoretical knowledge and practical skills, which I have applied through various mini-projects, lab work, and team-based assignments. I have gained experience in languages like C, C++, Python, and Java, along with skills in web technologies like HTML, CSS, JavaScript, and basic SQL for database interaction.

Currently, I am working on my final-year project, which serves as a capstone to my diploma studies. This project is helping me strengthen my problem-solving ability, improve my project management and teamwork skills, and deepen my understanding of how to design, build, and test software solutions in real-world scenarios.
        </p>
      </motion.div>
    </section>
  );
}
