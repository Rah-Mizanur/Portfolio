import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./App.css";
import Navbar from "./Component/Navbar";
import Myimg from './assets/WhatsApp Image 2024-10-28 at 18.37.39_737fc3f7.jpg'

function App() {
 return (
  <div className="relative bg-gray-900">
    {/* Navbar */}
    <header className="relative">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center w-11/12 mx-auto py-32 md:py-40 gap-10">
        
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-[4vw] md:text-6xl font-bold text-amber-700 mb-6">
            Welcome! <br />
            <span className="text-white">I’m Mizanur — Frontend Developer</span>
          </h1>
          <p className="text-gray-300 mb-6">
          Crafting dynamic, responsive web experiences with React, Firebase, and Tailwind, blending functionality, design, and performance to bring ideas to life online.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mb-6 text-cyan-500 text-xl">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaWhatsapp />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <button className="btn rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black border-black shadow-md transition-all">
              Get Hired
            </button>
            <button className="btn rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black border-black shadow-md transition-all">
              Get Started
            </button>
          </div>
        </div>

        {/* Right: Avatar/Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            className="w-64 md:w-96 rounded-full border-4 border-cyan-500 shadow-lg"
            src={Myimg}
            alt="Mizanur Rahman"
          />
        </div>
      </section>
    </header>
  </div>
);

}

export default App;


