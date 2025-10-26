import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const DiscussProject = () => {
  // ⚠️ Replace this with your full WhatsApp number (e.g. 8801781234567)
  const whatsappNumber = "8801XXXXXXXXX";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Mizanur!%20I%20want%20to%20discuss%20a%20project.`;

  return (
    <section className="bg-gradient-to-b from-black via-[#00181b] to-[#001014] py-24 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-11/12 md:w-3/4 mx-auto flex flex-col items-center"
      >
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl font-bold text-cyan-400 mb-4"
        >
          Let’s Discuss Your Project
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Have an idea in mind or need a professional touch for your website or web app?
          Let’s turn your vision into a beautiful, functional reality. Reach out and we’ll
          make it happen together.
        </motion.p>

        {/* WhatsApp Button */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          Contact Me on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
};

export default DiscussProject;
