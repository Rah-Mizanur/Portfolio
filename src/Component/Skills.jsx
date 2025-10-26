import { motion } from "framer-motion";

const Skills = () => {
  const skills = ["React", "Tailwind CSS", "Firebase", "JavaScript", "HTML", "CSS", "Git"];

  return (
    <div className="w-11/12 mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="bg-cyan-500 text-black px-4 py-2 rounded-full font-semibold cursor-default"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.1, backgroundColor: "#22d3ee", color: "#000" }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
