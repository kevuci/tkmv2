import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
    <div
      id="Experience"
      className="h-screen w-screen bg-gray-500 flex items-center justify-center px-3"
    >
      <section ref={sectionRef}>
        {isVisible && (
          <div className="max-w-6xl w-full">
            <div className="flex flex-col items-center md:flex-row">
              {/* Left Section - Work Image */}
              <motion.div
                className="mt-4"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.img
                  className="w-42 h-52 object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105"
                  src="/content/other/sales.jpg" // Cseréld ki a megfelelő képre
                  alt="Workplace"
                />
              </motion.div>

              {/* Right Section - Content */}
              <motion.div
                className="md:w-2/3 p-8 md:p-14 text-center md:text-left"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-300 leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Work Experience
                </motion.h1>

                <motion.p
                  className="text-gray-200 mt-4 text-base sm:text-lg md:text-xl"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  I started my professional journey in 2022 at{" "}
                  <span className="font-bold text-pink-300">
                    Magyar Telekom Nyrt.
                  </span>
                  , where I gained hands-on experience in{" "}
                  <span className="text-blue-300 font-bold">
                    Sales Representative Specialist{" "}
                  </span>
                  . My work here involved communication develop, mentoring,
                  coaching, sale tips, which helped me develop my skills in
                  Sales.
                </motion.p>

                <motion.p
                  className="text-gray-200 mt-4 text-base sm:text-lg md:text-xl"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  Following this, I joined{" "}
                  <span className="font-bold text-orange-300">
                    Sárga Magház KFT
                  </span>
                  as a{" "}
                  <span className="text-red-300 font-bold">
                    Fullstack Developer{" "}
                  </span>
                  , where I contributed to develop a website alone, my hands was
                  totally free, so i designed it by myself and built it fully.
                  This opportunity significantly broadened my perspective and
                  enhanced my expertise in React, Tpyescript and Tailwind.
                </motion.p>

                <motion.p
                  className="text-gray-200 mt-4 text-base sm:text-lg md:text-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  My professional journey has been marked by continuous growth
                  and a commitment to excellence. I am passionate about
                  leveraging my experience to contribute meaningfully to any
                  team I join.
                </motion.p>
              </motion.div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Experience;
