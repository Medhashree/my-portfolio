import { ArrowUp } from "lucide-react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-start gap-6">
      {/* Left Side */}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} MedhashreeMoshat.co. All rights
        reserved.
      </p>

      {/* Right Side - Connect with me */}
      <div className="flex flex-col items-start">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent mb-3">
          Connect with me
        </h2>

        <div className="flex flex-wrap gap-3 text-2xl text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/medhashree-moshat-468a061aa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-teal-400 border border-purple-500 p-2 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Medhashree"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-teal-400 border border-purple-500 p-2 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/Medhashree_17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-teal-400 border border-purple-500 p-2 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/medhashree.moshat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-teal-400 border border-purple-500 p-2 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/shree_pollyanna/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-teal-400 border border-purple-500 p-2 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:moshat.medhashree15@gmail.com"
            aria-label="Email"
            className="text-teal-400 border border-purple-500 p-2 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
