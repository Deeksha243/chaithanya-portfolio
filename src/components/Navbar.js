import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Chaithanya</h1>
        <div className="space-x-6">
          {["Home", "About", "Projects", "SkillsSection","Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
