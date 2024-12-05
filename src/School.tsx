import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const University: React.FC = () => {
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
      id="School"
      className="h-screen w-screen bg-gray-200 flex items-center justify-center px-3"
    >
      <section id="School" ref={sectionRef}>
        {isVisible && (
          <div className="max-w-6xl w-full">
            <div className="flex flex-col items-center md:flex-row">
              {/* Left Section - University Image */}
              <motion.div
                className="mt-4"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.img
                  className="w-42 h-52 object-cover rounded-lg shadow-lg transform transition-transform hover:scale-105"
                  src="/content/university.of.eger.png"
                  alt="Eszterházy Károly Katolikus Egyetem"
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
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-600 leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  University Journey
                </motion.h1>

                <motion.p
                  className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  I began my studies in September 2022 at{" "}
                  <span className="font-bold text-gray-800">
                    Eszterházy Károly Catholic University
                  </span>
                  , where I am currently pursuing a degree in computer science.
                  The opportunities provided by the university and my dedication
                  to professional growth motivate me every day.
                </motion.p>

                <motion.p
                  className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  My plans include continuing my education after graduation in
                  the MSc program at{" "}
                  <span className="font-bold text-gray-800">
                    Eötvös Loránd University
                  </span>{" "}
                  in Budapest. I firmly believe that learning is a lifelong
                  journey, and this will be an essential milestone in my career
                  path.
                </motion.p>

                <motion.p
                  className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  During my university years, I have gained countless
                  experiences, and besides studying, I strive to nurture my
                  creativity and passions.
                </motion.p>
              </motion.div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default University;
