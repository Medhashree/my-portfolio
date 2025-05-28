import { FaDownload } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import { saveAs } from "file-saver";

const Home = () => {
    const handleDownload = () => {
  saveAs("/Medhashree_resume_2025.pdf", "Medhashree_Resume_2025.pdf");
};

  return (
    <section
      id="home"
      className="h-screen flex justify-center items-center bg-transparent px-4"
    >
      <div className="text-center max-w-4xl space-y-6">
        <h1 className="font-bold text-white text-[5vw] sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
          Hello, I&apos;m <span className="text-purple-400">Medhashree Moshat</span>
        </h1>

        <h3 className="text-xl sm:text-2xl font-semibold text-teal-300 min-h-[2.5rem]">
          <Typewriter
            options={{
              strings: [
                "Passionate Web Developer",
                "MERN Stack Engineer",
                "MEAN Stack Engineer",
                "B.Tech in CSE",
                "Tech Explorer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </h3>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          With over 4 years of experience in web development, I specialize in creating
          responsive, accessible, and performant web applications using modern technologies.
        </p>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          I’m passionate about crafting elegant solutions to complex problems and constantly
          evolving with the tech landscape.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-500 to-teal-400 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition"
          >
            Get In Touch
          </a>

          <button
            onClick={handleDownload}
            download
            className="flex items-center gap-2 px-6 py-2 border border-teal-400 text-teal-400 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition"
          >
            <FaDownload />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;


