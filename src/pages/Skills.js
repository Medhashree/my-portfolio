import { useState } from "react";

const skillsData = {
  All: [
    // Languages & Web Fundamentals
    "JavaScript", "TypeScript", "HTML", "CSS", "SCSS", "OOP",
    // Frameworks & Libraries & Analytics
    "ReactJS", "Redux", "Context API", "Angular", "Tailwind CSS", "Material-UI", "Adobe Analytics",
    // Backend, Databases & API Development
    "Node.js", "Express.js", "REST APIs", "GraphQL", "MySQL", "Oracle", "NoSQL",
    // DevOps, Tools & Deployment
    "Webpack", "Vite", "Babel", "Parcel", "Git", "Jenkins", "VSCode", "Postman", "Figma", "Google Firebase", "AWS S3", "Azure",
    // Testing & Debugging
    "Jest", "React Testing Library", "Jasmine/Karma", "Chrome DevTools", "Redux DevTools"
  ],
  Frontend: [
    // Languages & Web Fundamentals
    "JavaScript", "TypeScript", "HTML", "CSS", "SCSS", "OOP",
    // Frameworks & Libraries & Analytics
    "ReactJS", "Redux", "Context API", "Angular", "Tailwind CSS", "Material-UI", "Adobe Analytics"
  ],
  Backend: [
    // Backend, Databases & API Development
    "Node.js", "Express.js", "REST APIs", "GraphQL", "MySQL", "Oracle", "NoSQL"
  ],
  Tools: [
    // DevOps, Tools & Deployment
    "Webpack", "Vite", "Babel", "Parcel", "Git", "Jenkins", "VSCode", "Postman", "Figma", "Google Firebase", "AWS S3", "Azure"
  ],
  Testing: [
    // Testing & Debugging
    "Jest", "React Testing Library", "Jasmine/Karma", "Chrome DevTools", "Redux DevTools"
  ]
};


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen">
      {/* Categories Tabs */}
      <div className="flex space-x-6 mb-8 justify-center">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`py-2 px-4 rounded-md font-semibold transition-colors ${
              activeCategory === category
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsData[activeCategory].map((skill) => (
          <div
            key={skill}
            className="text-center py-2 px-4 bg-stone-950 rounded-md shadow-sm hover:shadow-md transition-shadow cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
