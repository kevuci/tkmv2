import { Github, Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function Contactme() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div id="Contact" className="bg-gray-400" ref={sectionRef}>
      <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8">
        {/* Címsor */}
        {inView && (
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-black dark:text-gray-200"
          >
            Get in Touch
          </motion.h1>
        )}

        {/* Gombok */}
        <div className="flex items-center justify-center space-x-5 lg:space-x-16 ">
          {inView && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.4, rotate: 10 }}
                  whileTap={{
                    scale: 1,
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                >
                  <div className="flex items-center justify-center space-x-4 lg:space-x-5">
                    <div className="flex transform items-center justify-center rounded border-b-4 border-gray-500 bg-white px-4 py-2 lg:px-5 lg:py-3 font-bold text-black shadow-lg hover:border-red-500 hover:bg-red-400 dark:border-red-700 dark:bg-red-500 dark:text-white dark:hover:border-red-400 dark:hover:bg-red-300">
                      <a
                        href="mailto:kevuci@icloud.com"
                        className="font-semibold text-black dark:text-white text-sm lg:text-base"
                      >
                        <Mail size={24} className="lg:size-28" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <motion.a
                  whileHover={{ scale: 1.4, rotate: -10 }}
                  whileTap={{
                    scale: 1,
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  href="https://instagram.com/tothkevemate/"
                  target="_blank"
                  className="flex transform items-center justify-center space-x-4 lg:space-x-5 rounded border-b-4 border-gray-500 bg-white px-4 py-2 lg:px-5 lg:py-3 font-bold text-orange-500 shadow-lg hover:border-orange-500 hover:bg-orange-300 dark:border-orange-700 dark:bg-orange-500 dark:text-white dark:hover:border-orange-400 dark:hover:bg-orange-300"
                >
                  <Instagram size={24} className="lg:size-28" />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1 }}
              >
                <motion.a
                  whileHover={{ scale: 1.4, rotate: 10 }}
                  whileTap={{
                    scale: 1,
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  href="https://twitter.com/pucudli/"
                  target="_blank"
                  className="flex transform items-center justify-center space-x-4 lg:space-x-5 rounded border-b-4 border-gray-500 bg-white px-4 py-2 lg:px-5 lg:py-3 font-bold text-sky-400 shadow-lg hover:border-sky-500 hover:bg-sky-200 dark:border-sky-600 dark:bg-sky-400 dark:text-white dark:hover:border-sky-500 dark:hover:bg-sky-300"
                >
                  <Twitter size={24} className="lg:size-28" />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5, delay: 1 }}
              >
                <motion.a
                  whileHover={{ scale: 1.4, rotate: -10 }}
                  whileTap={{
                    scale: 1,
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  href="https://www.facebook.com/tothkevemate/"
                  target="_blank"
                  className="flex transform items-center justify-center space-x-4 lg:space-x-5 rounded border-b-4 border-gray-500 bg-white px-4 py-2 lg:px-5 lg:py-3 font-bold text-blue-500 shadow-lg hover:border-blue-500 hover:bg-blue-400 dark:border-blue-600 dark:bg-blue-500 dark:text-white dark:hover:border-blue-800 dark:hover:bg-blue-600"
                >
                  <Facebook size={24} className="lg:size-28" />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5, delay: 1 }}
              >
                <motion.a
                  whileHover={{ scale: 1.4, rotate: -10 }}
                  whileTap={{
                    scale: 1,
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                  href="https://github.com/kevuci/"
                  target="_blank"
                  className="flex transform items-center justify-center space-x-4 lg:space-x-5 rounded border-b-4 border-gray-500 bg-white px-4 py-2 lg:px-5 lg:py-3 font-bold text-green-500 shadow-lg hover:border-green-500 hover:bg-green-400 dark:border-green-600 dark:bg-green-500 dark:text-white"
                >
                  <Github size={24} className="lg:size-28" />
                </motion.a>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Contactme;
