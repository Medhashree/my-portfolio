import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Lexmark International Inc.",
    title: "Software Engineer 2",
    type: "Full-time",
    location: "Kolkata, India",
    from: "Dec 2022",
    to: "Present",
    logo: "/logos/lexmark.png",
    responsibilities: [
      <>
        Designed and developed customer-facing web applications (
        <a
          href="https://www.lexmark.com/en_us.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          eCommerce
        </a>
        ,{" "}
        <a
          href="https://www.lexmark.com/en_us/services/lexmark-oneprint.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          OnePrint
        </a>
        ,{" "}
        <a
          href="https://oneprint.lexmark.com/en-US/SupplyPlus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          SupplyPlus
        </a>
        ) using <span className="text-teal-400">ReactJS</span>,{" "}
        <span className="text-teal-400">React Hooks</span>, and{" "}
        <span className="text-teal-400">Context API</span>, delivering scalable
        and high-performance solutions.
      </>,
      <>
        Built reusable UI components and implemented responsive, user-friendly
        interfaces using{" "}
        <span className="text-teal-400">
          Lexmark’s internal Front-End Framework
        </span>
        .{" "}
      </>,
      <>
        Worked on B2B platforms using{" "}
        <span className="text-teal-400">Magento Luma</span>, contributing to
        custom module development and interface enhancements.
      </>,
      <>
        Integrated{" "}
        <span className="text-teal-400">
          Adobe Commerce (Magento) GraphQL APIs
        </span>{" "}
        using <span className="text-teal-400">Apollo Client</span>, optimizing
        data fetching and improving application scalability.
      </>,
      <>
        Enhanced UI/UX using <span className="text-teal-400">Material-UI</span>,{" "}
        <span className="text-teal-400">Tailwind CSS</span>, and{" "}
        <span className="text-teal-400">Responsive Web Design</span> to ensure
        consistent experiences across devices.
      </>,
      <>
        Improved front-end performance by{" "}
        <span className="text-teal-400">40%</span> through the use of{" "}
        <span className="text-teal-400">React.memo</span>,{" "}
        <span className="text-teal-400">useMemo</span>, and{" "}
        <span className="text-teal-400">lazy loading</span>, significantly
        reducing load times and enhancing client-side efficiency; also
        implemented unit tests with Jest to ensure component reliability.
      </>,
      <>
        Leveraged <span className="text-teal-400">Adobe Analytics</span> to
        track user behavior, generating insights that informed UX optimizations
        and improved conversion rates.
      </>,
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    title: "Associate",
    type: "Full-time",
    location: "Kolkata, India",
    from: "Aug 2020",
    to: "Nov 2022",
    logo: "/logos/cognizant.png",
    responsibilities: [
      <>
        Developed and optimized frontend features for internal tools like{" "}
        <span className="text-teal-400">Offer Management System</span>,{" "}
        <span className="text-teal-400">Store-Hub</span>, and{" "}
        <span className="text-teal-400">Pricing Administration</span> for{" "}
        <a
          href="https://www.papajohns.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          Papa John’s International
        </a>{" "}
        using <span className="text-teal-400">Angular 10</span>,{" "}
        <span className="text-teal-400">TypeScript</span>,{" "}
        <span className="text-teal-400">SCSS</span>, and{" "}
        <span className="text-teal-400">HTML5</span>.
      </>,
      <>
        Built reusable components and implemented reactive forms using{" "}
        <span className="text-teal-400">Angular Reactive Forms</span> and{" "}
        <span className="text-teal-400">RxJS</span> for state management and API
        integration.
      </>,
      <>
        Optimized frontend performance using{" "}
        <span className="text-teal-400">OnPush Change Detection</span>,{" "}
        <span className="text-teal-400">lazy loading</span>, and{" "}
        <span className="text-teal-400">module splitting</span>, improving load
        time and runtime efficiency.
      </>,
      <>
        Collaborated closely with clients to gather requirements, translate them
        into technical specs, and deliver clean, maintainable code following{" "}
        <span className="text-teal-400">Agile methodologies</span> and{" "}
        <span className="text-teal-400">SCRUM practices</span>.
      </>,
      <>
        Wrote comprehensive unit and integration tests using{" "}
        <span className="text-teal-400">Jasmine</span> and{" "}
        <span className="text-teal-400">Karma</span> to ensure component quality
        and regression stability.
      </>,
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25 },
  }),
};

const Experience = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="text-white px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 flex items-center space-x-2">
        <FaBriefcase />
        <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent pl-5">
          Experience
        </span>
      </h2>

      <div className="relative pl-12">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-500 z-0" />

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative mb-14">
            {/* Timeline Dot */}
            <div className="absolute left-[calc(24px-54px)] top-2 w-4 h-4 rounded-full bg-white border-2 border-teal-400 z-10" />

            {/* Content Row */}
            <div className="ml-10 flex gap-4 items-start">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 object-contain mt-1"
              />
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-300">
                  {exp.company} · {exp.type}
                </p>
                <p className="text-sm text-gray-400">
                  {exp.from} - {exp.to} · {exp.location}
                </p>

                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="mt-2 text-purple-400 hover:border border-purple-500 rounded px-2 py-0.5"
                >
                  {open === idx ? "Hide" : "Show"} Responsibilities
                </button>

                {open === idx && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    className="mt-4 space-y-2"
                  >
                    {exp.responsibilities.map((point, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={itemVariants}
                        className="flex items-start text-sm text-gray-300"
                      >
                        <ChevronRight
                          size={16}
                          className="text-purple-400 min-w-[16px] min-h-[16px] mt-1 mr-1"
                        />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
