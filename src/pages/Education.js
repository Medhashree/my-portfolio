import { FaGraduationCap } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";

const educationData = [
  {
    label: "Graduation",
    logo: <FaGraduationCap className="text-teal-400 text-5xl" />,
    institution: "St. Thomas College of Engineering and Technology, Kolkata",
    degree: "Bachelor of Technology (BTech)",
    duration: "2016 - 2020",
    major: "Computer Science and Engineering (CSE)",
    gpa: "8.74 / 10",
  },
  {
    label: "High School",
    logo: <IoBookSharp className="text-teal-400 text-5xl" />,
    institution: "Bengal Engineering College Model School",
    degree: "West Bengal Council of Higher Secondary Education",
    duration: "2014 - 2016",
    major: "Science (English Medium)",
    gpa: "83.2%",
  },
  {
    label: "School",
    logo: <IoBookSharp className="text-teal-400 text-5xl" />,
    institution: "Shri Shikshayatan School",
    degree: "West Bengal Council of Higher Secondary Education",
    duration: "2003 - 2014",
    major: "",
    gpa: "87.4%",
  },
];

const Education = () => {
  return (
    <div className="text-white px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 flex items-center space-x-2">
        <FaPenNib />
        <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent pl-5">
          Education
        </span>
      </h2>

      <div className="relative pl-12">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-500 z-0" />

        {educationData.map((edu, idx) => (
          <div key={idx} className="relative mb-14">
            {/* Dot with Label */}
            <div className="absolute left-[calc(24px-54px)] top-2 w-4 h-4 rounded-full bg-white border-2 border-teal-400 z-10" />

            {/* Content Row */}
            <div className="ml-10 flex gap-4 items-start">
              <div className="mt-1">{edu.logo}</div>
              <div>
                <h2 className="text-lg font-semibold text-purple-400 mt-1">{edu.label}</h2>
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-md text-gray-300">{edu.degree}</p>
                <p className="text-md text-gray-400">{edu.major}</p>
                <p className="text-sm text-gray-400">{edu.duration}</p>
                <p className="text-sm text-gray-400">{edu.label === 'Graduation' && <span >GPA: </span>}{edu.gpa}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
