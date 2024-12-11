import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    "Home",
    "About",
    "School",
    "Skills",
    "Contact",
    "Experience",
    "More",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        if (isOpen) {
          setIsOpen(false);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      let newActiveSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            newActiveSection = section;
            break;
          }
        }
      }
      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    const metaThemeColor = document.querySelector(
      'meta[name="theme-color"]'
    ) as HTMLMetaElement;
    if (metaThemeColor) {
      metaThemeColor.content = "#1f2937";
    }
  }, []);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Snowfall Effect
  useEffect(() => {
    const canvas = document.getElementById("snowCanvas") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = isVisible ? 200 : 0;
    };

    resizeCanvas();

    const snowflakes: { x: number; y: number; r: number; d: number }[] = [];
    const numFlakes = 100;

    for (let i = 0; i < numFlakes; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        d: Math.random() * numFlakes,
      });
    }

    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      for (const flake of snowflakes) {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      updateSnowflakes();
    };

    const updateSnowflakes = () => {
      for (const flake of snowflakes) {
        flake.y += Math.cos(flake.d) + 1;
        flake.x += Math.sin(flake.d);

        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
      }
    };

    const animate = () => {
      if (isVisible) {
        drawSnowflakes();
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isVisible]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="bg-black shadow-lg fixed top-0 left-0 right-0 z-50"
      >
        <canvas
          id="snowCanvas"
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{ zIndex: 1 }}
        ></canvas>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex-shrink-0"
            >
              <a href="/" className="text-white text-2xl font-bold">
                tothkevemate
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:flex space-x-8"
            >
              {sections.map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={() => handleSectionClick(section)}
                  className={`text-white hover:text-gray-200 ${
                    activeSection === section ? "font-bold" : "font-normal"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="md:hidden flex items-center"
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden md:hidden bg-black shadow-lg"
        >
          {sections.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              onClick={() => handleSectionClick(section)}
              className={`block px-4 py-2 text-white hover:bg-gray-700 ${
                activeSection === section ? "font-bold" : "font-normal"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 10 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
