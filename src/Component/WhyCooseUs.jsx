import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaLightbulb,
  FaDollarSign,
  FaClock,
  FaSmile,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaUserCheck className="text-5xl text-cyan-400" />,
      title: "Expertise and Experience",
      desc: "Years of hands-on experience crafting scalable, high-performing digital products using modern frameworks like React and Firebase.",
    },
    {
      icon: <FaLightbulb className="text-5xl text-cyan-400" />,
      title: "Quality-Driven Solutions",
      desc: "We focus on precision, performance, and reliability — ensuring every project delivers measurable impact and user satisfaction.",
    },
    {
      icon: <FaDollarSign className="text-5xl text-cyan-400" />,
      title: "Competitive Pricing",
      desc: "Transparent, affordable pricing tailored to your project goals — ensuring maximum value without compromising quality.",
    },
    {
      icon: <FaClock className="text-5xl text-cyan-400" />,
      title: "Timely Delivery",
      desc: "We respect your time. Our agile process ensures that every milestone is achieved on schedule with consistent progress updates.",
    },
    {
      icon: <FaSmile className="text-5xl text-cyan-400" />,
      title: "Customer-Centric Approach",
      desc: "Your satisfaction is our top priority. We collaborate closely to turn your ideas into exceptional digital experiences.",
    },
    {
      icon: <FaHeadset className="text-5xl text-cyan-400" />,
      title: "24/7 Support",
      desc: "Our team is always ready to assist — from troubleshooting to scaling, we ensure your platform runs smoothly around the clock.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="bg-gradient-to-b from-[#00191e] via-[#000f11] to-black text-white py-24"
      id="why-choose-us"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-400 mb-3"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          We don’t just build projects — we build partnerships based on trust, innovation, and measurable success.
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#0d0d0d] border border-cyan-900 rounded-xl p-8 text-center hover:bg-[#00252a] transition-all duration-300"
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: "0px 0px 25px rgba(34,211,238,0.3)",
            }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <motion.div
              className="flex justify-center items-center mb-6"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="p-5 bg-[#00363d] rounded-full shadow-inner shadow-cyan-700">
                {item.icon}
              </div>
            </motion.div>

            {/* Title + Description */}
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
