import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./App.css";
import Navbar from "./Component/Navbar";
import Myimg from './assets/WhatsApp Image 2024-10-28 at 18.37.39_737fc3f7.jpg'
import Services from "./Component/Services";
import WhyChooseUs from "./Component/WhyChooseUs";
import MyWork from "./Component/MyWork";
import DiscussProject from "./Component/DiscussProject";
import Footer from "./Component/Footer";
import SocialIcons from "./Component/SocialIcons";
import Skills from "./Component/Skills";



function App() {
 return (
  <div className="relative bg-gray-900">
    {/* Navbar */}
    <header className="relative">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
     
    <section className="flex flex-col-reverse md:flex-row items-center w-11/12 mx-auto py-32 md:py-40 gap-10 overflow-hidden">
      
      {/* Left: Text */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-[4vw] md:text-6xl font-bold text-amber-700 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Welcome! <br />
          <span className="text-white">I’m Mizanur — Frontend Developer</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-6 max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Crafting dynamic, responsive web experiences with React, Firebase, and Tailwind, blending functionality, design, and performance to bring ideas to life online.
        </motion.p>

        {/* Social Icons */}
   <SocialIcons></SocialIcons>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {["Get Hired", "Get Started"].map((btn, i) => (
            <motion.button
              key={i}
              className="btn rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black border-black shadow-md transition-all px-6 py-3 font-semibold"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {btn}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Right: Avatar/Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.img
          className="w-64 md:w-96 rounded-full border-4 border-cyan-500 shadow-lg"
          src={Myimg}
          alt="Mizanur Rahman"
          whileHover={{
            scale: 1.05,
            rotate: 3,
            boxShadow: "0px 0px 40px rgba(34, 211, 238, 0.5)",
          }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </section>
    </header>
  <Skills></Skills>
    <Services></Services>
    <WhyChooseUs></WhyChooseUs>
    <MyWork></MyWork>
    <DiscussProject></DiscussProject>
    <Footer></Footer>
  </div>
);

}

export default App;





