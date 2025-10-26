import { motion } from "framer-motion";

// Example project images (replace with your own)
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";


const MyWork = () => {
  const projects = [
    {
      id: 1,
      title: "App Management",
      tech: "React + Tailwind",
      img: Project1,
      link: "https://bitvaultforyou.netlify.app/",
    },
    {
      id: 2,
      title: "Landing Page Design",
      tech: "React + Firebase",
      img: Project2,
      link: "https://greennest-4a10b.web.app/",
    },
   
    {
      id: 3,
      title: "Portfolio Website",
      tech: "Tailwind + Framer Motion",
      img: Project3,
      link: "#",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      tech: "HTML5 + JavaScript ",
      img: Project4,
      link: "https://deshi-dealsbd.netlify.app/",
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
      id="work"
      className="bg-gradient-to-b from-[#00191e] via-[#001014] to-black text-white py-24"
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
          My Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          A selection of my favorite projects that showcase creativity,
          functionality, and attention to detail — built with modern web
          technologies.
        </motion.p>
      </div>

      {/* Project Grid */}
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="relative group rounded-xl overflow-hidden border border-cyan-900 bg-[#0a0a0a] shadow-lg"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00181b]/60 to-[#00181b] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-md transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
