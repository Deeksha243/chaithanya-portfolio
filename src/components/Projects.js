export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Responsive personal website with React and Tailwind.",
    },
    {
      title: "To-do App",
      description: "Task manager with drag-and-drop and localStorage.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
