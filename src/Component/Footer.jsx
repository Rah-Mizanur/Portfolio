import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-[#001014] to-[#00181b] text-white py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-11/12 md:w-3/4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Left: Name & Address */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Mizanur Rahman</h2>
          <p className="text-gray-400">
            Kutubpur, Shariakandi, Bogura, Bangladesh
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-6 text-2xl text-cyan-500">
          <a href="https://www.facebook.com/groups/1001798088430659/user/100076062306454" className="hover:text-cyan-400 transition-colors">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/mizan_90786/" className="hover:text-cyan-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="" className="hover:text-cyan-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/8801311892566" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaWhatsapp />
          </a>
        </div>
      </motion.div>

      {/* Bottom copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-600 text-center mt-8 text-sm"
      >
        &copy; {new Date().getFullYear()} Mizanur Rahman. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
