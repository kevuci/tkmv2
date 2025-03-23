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
        {inView && (
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-black dark:text-gray-200 pb-8"
          >
            Get in Touch
          </motion.h1>
        )}

        <div className="flex items-center justify-center space-x-5 lg:space-x-16">
          {inView &&
            [
              {
                href: "mailto:kevuci@icloud.com",
                color: "text-black dark:text-white",
                bg: "bg-white dark:bg-red-500",
                border:
                  "border-gray-500 dark:border-red-700 hover:border-red-500 dark:hover:border-red-400",
                hoverBg: "hover:bg-red-400 dark:hover:bg-red-300",
                icon: <Mail size={24} className="lg:size-28" />,
              },
              {
                href: "https://instagram.com/tothkevemate/",
                color: "text-orange-500 dark:text-white",
                bg: "bg-white dark:bg-orange-500",
                border:
                  "border-gray-500 dark:border-orange-700 hover:border-orange-500 dark:hover:border-orange-400",
                hoverBg: "hover:bg-orange-300 dark:hover:bg-orange-300",
                icon: <Instagram size={24} className="lg:size-28" />,
              },
              {
                href: "https://twitter.com/pucudli/",
                color: "text-sky-400 dark:text-white",
                bg: "bg-white dark:bg-sky-400",
                border:
                  "border-gray-500 dark:border-sky-600 hover:border-sky-500 dark:hover:border-sky-500",
                hoverBg: "hover:bg-sky-200 dark:hover:bg-sky-300",
                icon: <Twitter size={24} className="lg:size-28" />,
              },
              {
                href: "https://www.facebook.com/tothkevemate/",
                color: "text-blue-500 dark:text-white",
                bg: "bg-white dark:bg-blue-500",
                border:
                  "border-gray-500 dark:border-blue-600 hover:border-blue-500 dark:hover:border-blue-800",
                hoverBg: "hover:bg-blue-400 dark:hover:bg-blue-600",
                icon: <Facebook size={24} className="lg:size-28" />,
              },
              {
                href: "https://github.com/kevuci/",
                color: "text-green-500 dark:text-white",
                bg: "bg-white dark:bg-green-500",
                border:
                  "border-gray-500 dark:border-green-600 hover:border-green-500",
                hoverBg: "hover:bg-green-400",
                icon: <Github size={24} className="lg:size-28" />,
              },
            ].map((button, index) => (
              <motion.div
                key={button.href}
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 + index * 0.5, delay: 1 }}
              >
                <motion.a
                  whileHover={{
                    scale: 1.4,
                    rotate: index % 2 === 0 ? 10 : -10,
                  }}
                  whileTap={{ scale: 1, rotate: -90, borderRadius: "100%" }}
                  href={button.href}
                  target="_blank"
                  className={`flex transform items-center justify-center space-x-4 lg:space-x-5 rounded border-b-4 px-4 py-2 lg:px-5 lg:py-3 font-bold shadow-lg ${button.color} ${button.bg} ${button.border} ${button.hoverBg}`}
                >
                  {button.icon}
                </motion.a>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Contactme;
