import React from 'react';

const skills = {
  "Programming Languages": ["C", "C++", "Java", "Python", "JavaScript"],
  "Web Development": ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP (Basic)"],
  "Database": ["MySQL", "SQL Server (Basics)"],
};

const SkillsSection = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto p-8 my-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">My Skills</h2>
      
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{category}</h3>
          <ul className="flex flex-wrap gap-3">
            {skillList.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
