import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to detect when the section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("Skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      id="Skills"
      className="w-screen min-h-screen flex items-center justify-center bg-gray-300 pt-16"
    >
      <motion.div
        className="font-old text-white"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 300 }}
        transition={{ type: "spring", duration: 1, delay: 0.3 }}
      >
        <p className="text-4xl text-gray-700 font-bold text-center mb-8 fonts-sans">
          Skills
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 0.4 }}
          >
            React
          </motion.button>
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 0.5 }}
          >
            TypeScript
          </motion.button>
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 0.6 }}
          >
            Tailwind
          </motion.button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 0.7 }}
          >
            JavaScript
          </motion.button>
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 0.8 }}
          >
            PHP
          </motion.button>
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 0.9 }}
          >
            HTML
          </motion.button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 1 }}
          >
            Laravel
          </motion.button>
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 1.1 }}
          >
            Angular
          </motion.button>
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 1.2 }}
          >
            Atom
          </motion.button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 1.3 }}
          >
            Node.js
          </motion.button>
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 1.4 }}
          >
            SQL
          </motion.button>
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 1.5 }}
          >
            C#
          </motion.button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 1.6 }}
          >
            Python
          </motion.button>
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 1.7 }}
          >
            Wordpress
          </motion.button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <motion.button
            type="button"
            className="mb-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:scale-110 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ type: "spring", duration: 1, delay: 1.8 }}
          >
            Cisco
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
