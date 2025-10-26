import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const SocialIcons = () => {
  const socialLinks = [
    { icon: FaFacebook, link: "https://www.facebook.com/groups/1001798088430659/user/100076062306454" },
    { icon: FaInstagram, link: "https://www.instagram.com/mizan_90786/" },
    { icon: FaLinkedin, link: "" },
    { icon: FaWhatsapp, link: "https://wa.me/8801311892566" }, // Replace with your number
  ];

  return (
    <motion.div
      className="flex justify-center md:justify-start gap-4 mb-6 text-cyan-500 text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {socialLinks.map(({ icon: Icon, link }, i) => (
        <motion.a
          key={i}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10, color: "#22d3ee" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;
