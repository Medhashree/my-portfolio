import { useRef } from "react";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3moghgd",
        "template_cuuahz1",
        form.current,
        "KDP64Sf8g86LI8tPY"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
          });
          form.current.reset();
        })
        .catch( () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-background relative z-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="!top-28 !right-10"
      />

      {/* Heading */}
      <div className="text-center mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Have an exciting idea or a project in mind? Let's connect — I'm always
          open to exploring new collaborations and bringing creative visions to
          life.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-stone-950 p-8 rounded-xl shadow-lg space-y-5"
        >
          <h3 className="text-white text-2xl font-semibold mb-4">
            Send a Message
          </h3>

          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-stone-800 border border-border text-white placeholder:text-gray-400"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-stone-800 border border-border text-white placeholder:text-gray-400"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-stone-800 border border-border text-white placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg w-full flex items-center justify-center gap-2"
          >
            Send Message <FiSend />
          </button>
        </form>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="/assets/profilepic.jpg"
            alt="Profile"
            className="w-[380px] h-auto object-cover border-4 border-teal-500 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
