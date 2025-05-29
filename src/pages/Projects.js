import { FaArrowRight } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { LuExternalLink } from "react-icons/lu";

const projects = [
  {
    title: "DevTinder – Developer Matching Platform",
    description: (
      <>
        Built a full-stack MERN app to match developers by skills. Integrated{" "}
        <span className="text-teal-400 font-medium">real-time chat</span> with{" "}
        <span className="text-teal-400 font-medium">Socket.io</span>, scheduled{" "}
        <span className="text-teal-400 font-medium">email alerts</span> via{" "}
        <span className="text-teal-400 font-medium">cron jobs</span>, deployed
        on <span className="text-teal-400 font-medium">Amazon EC2</span>, and
        used <span className="text-teal-400 font-medium">Nodemailer</span> +{" "}
        <span className="text-teal-400 font-medium">Amazon SES</span> for
        emails.
      </>
    ),
    tech: ["React", "NodeJS", "TailwindCSS"],
    image: "/assets/project1.jpg",
    websiteLink: "http://16.171.234.159/",
    githubLink: "https://github.com/Medhashree/devTinder",
  },
  {
    title: "CineHolic – Movie Streaming Platform",
    description: (
      <>
        Developed a responsive{" "}
        <span className="text-teal-400 font-medium">Angular 10</span> app with{" "}
        <span className="text-teal-400 font-medium">
          Firebase Realtime Database
        </span>
        . Enabled unlimited movie purchases using data from{" "}
        <span className="text-teal-400 font-medium">OMDb</span> and{" "}
        <span className="text-teal-400 font-medium">TMDb APIs</span>.
      </>
    ),
    tech: ["Angular", "TypeScript", "BootStrap"],
    image: "/assets/project2.jpg",
    websiteLink: "https://github.com/Medhashree?tab=repositories",
    githubLink: "https://github.com/Medhashree?tab=repositories",
  },
  {
    title: "Hungrezy – Restaurant Discovery Platform",
    description: (
      <>
        Created a responsive{" "}
        <span className="text-teal-400 font-medium">ReactJS</span> app with{" "}
        <span className="text-teal-400 font-medium">Material-UI</span> for
        restaurant discovery and food delivery. Designed UI components for
        menus, reviews, and{" "}
        <span className="text-teal-400 font-medium">
          location-based delivery
        </span>{" "}
        to enhance UX.
      </>
    ),
    tech: ["React", "JavaScript", "Material UI"],
    image: "/assets/project3.jpg",
    websiteLink: "https://github.com/Medhashree/Hungrezy",
    githubLink: "https://github.com/Medhashree/Hungrezy",
  },
];

const Projects = () => {
  return (
    <section className="w-full py-20 bg-background text-white relative z-10">
      <div className="text-center mb-14 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Here are some of my academic projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-[#0f0f0f] p-5 rounded-xl shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>
            <div className="flex items-center gap-4">
              <a href={project.websiteLink} target="_blank">
                <LuExternalLink className="text-muted-foreground cursor-pointer" />
              </a>
              <a href={project.githubLink} target="_blank">
                <VscGithubAlt className="text-muted-foreground cursor-pointer" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/Medhashree?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-teal-400 over:opacity-90 transition text-white py-3 px-6 rounded-full font-semibold flex items-center gap-2"
        >
          Check My Github <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Projects;
