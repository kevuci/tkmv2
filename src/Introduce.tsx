import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ne figyelje tovább, ha egyszer már betöltött
        }
      },
      { threshold: 0.1 } // Akkor jelezzen, ha legalább 10%-a a szekciónak látható
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
      id="About"
      className="min-h-screen w-screen mt-20 md:mt-0 flex items-center justify-center"
    >
      <section id="About" ref={sectionRef}>
        {isVisible && (
          <div className="w-full h-full">
            <div className="flex flex-col items-center">
              {/* Left Section - Profile Picture */}
              <div className="mt-4">
                <motion.img
                  className="w-40 h-40 sm:w-40 sm:h-40 md:w-60 md:h-60 object-cover rounded-full shadow-lg transform transition-transform hover:scale-105"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  src="/src/pfp.png"
                  alt="Profile"
                />
              </div>

              {/* Right Section - Content */}
              <motion.div
                className="w-full p-8 text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-600 leading-tight">
                  Bonjour!
                </h1>
                <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl">
                  I'm a 22 year old computer science student, specializing in
                  software engineering. I have a passion for technology and a
                  love for building things, whether it's custom PCs or inspiring
                  setups.
                </p>
                <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl">
                  Fitness is an essential part of my daily life. When I'm not
                  coding or hitting the gym, you can find me exploring fashion,
                  photography, and luxury products.
                </p>
                <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl">
                  Traveling fuels my creativity, and I've been fortunate to
                  visit many amazing places around the world. Along the way,
                  I've gathered endless inspiration for design and tech.
                </p>
                <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl">
                  Join me on this journey of exploring the intersection of
                  technology, creativity, and style!
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
