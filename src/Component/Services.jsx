import { motion } from "framer-motion";
import { FaLightbulb, FaLaptopCode, FaBullseye, FaCode } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLightbulb className="text-6xl mb-6 text-cyan-400 mx-auto" />,
      title: "Application Design",
      tagline: "Design that blends creativity with usability",
      desc: "Crafting visually stunning, user-focused interfaces that balance aesthetics and functionality for a seamless digital experience.",
    },
    {
      icon: <FaLaptopCode className="text-6xl mb-6 text-cyan-400 mx-auto" />,
      title: "Web Hosting",
      tagline: "Reliable, secure, and lightning-fast",
      desc: "Providing scalable, high-performance hosting solutions that ensure your website is always fast, safe, and online 24/7.",
    },
    {
      icon: <FaBullseye className="text-6xl mb-6 text-cyan-400 mx-auto" />,
      title: "Social Media Marketing",
      tagline: "Grow your brand. Engage your audience.",
      desc: "Helping brands reach the right audience through data-driven campaigns, creative storytelling, and powerful social engagement.",
    },
    {
      icon: <FaCode className="text-6xl mb-6 text-cyan-400 mx-auto" />,
      title: "Creating Web App",
      tagline: "Modern, scalable, and performance-driven",
      desc: "Building responsive, secure, and high-performing web apps using React, Firebase, and cutting-edge front-end technologies.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="bg-gradient-to-b from-[#001f24] via-[#00191e] to-black text-white py-24"
      id="services"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-400 mb-3"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Empowering your digital presence with innovative design, robust
          development, and data-driven strategies that make an impact.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-b from-[#002f34] to-[#00181b] border border-cyan-900 rounded-xl p-10 text-center hover:border-cyan-400 transition-all duration-300 shadow-lg"
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            whileHover={{
              scale: 1.06,
              y: -10,
              boxShadow: "0px 0px 40px rgba(34,211,238,0.5)",
            }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="flex justify-center items-center mb-6">
              <div className="p-6 rounded-full bg-[#00363d] shadow-inner shadow-cyan-700">
                {service.icon}
              </div>
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              {service.title}
            </h3>
            <p className="text-cyan-300 text-sm italic mb-3">
              {service.tagline}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
