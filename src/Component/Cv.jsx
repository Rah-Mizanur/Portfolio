import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const CV = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen p-8 md:p-16 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-cyan-400 mb-2">Mizanur Rahman</h1>
        <p className="text-gray-300 text-lg">Frontend Developer | React, Tailwind, Firebase</p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-cyan-400" />
          <span>mizanur@example.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-cyan-400" />
          <span>+8801XXXXXXXXX</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-cyan-400" />
          <span>Kutubpur, Shariakandi, Bogura, Bangladesh</span>
        </div>
        <div className="flex items-center gap-3">
          <FaLinkedin className="text-cyan-400" />
          <span>linkedin.com/in/yourprofile</span>
        </div>
        <div className="flex items-center gap-3">
          <FaGithub className="text-cyan-400" />
          <span>github.com/yourusername</span>
        </div>
      </div>

      {/* About Me */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Me</h2>
        <p className="text-gray-300">
          I am a passionate Frontend Developer, crafting dynamic, responsive web experiences
          using React, Tailwind, and Firebase. I focus on blending functionality, design, and
          performance to bring ideas to life online.
        </p>
      </div>

      {/* Skills */}
 

      {/* Experience / Projects */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Portfolio Website", desc: "Responsive portfolio using React and Tailwind.", link: "#" },
            { title: "E-commerce App", desc: "Full-stack app with Firebase authentication and database.", link: "#" },
            { title: "Web App", desc: "Creating web apps with interactive UI and smooth UX.", link: "#" },
            { title: "Blog Platform", desc: "Dynamic blog site with CRUD functionality.", link: "#" },
            { title: "Chat App", desc: "Real-time chat using Firebase.", link: "#" },
            { title: "Landing Page", desc: "Modern responsive landing page design.", link: "#" },
          ].map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-800 rounded-lg hover:bg-cyan-500 hover:text-black transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-300">{proj.desc}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Education</h2>
        <p className="text-gray-300">B.Sc in Computer Science, University Name, Year</p>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Mizanur Rahman. All rights reserved.
      </div>
    </section>
  );
};

export default CV;
