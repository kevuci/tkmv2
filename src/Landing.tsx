import { motion } from "framer-motion";
import React from "react";

const Landing: React.FC = () => {
  return (
    <motion.div
      id="Home"
      className="min-h-screen md:w-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1480422080719-4d25a4c7e22c?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, delay: 0.5 }}
    >
      {/* Content Wrapper */}
      <motion.div
        className="text-center py-8 w-screen bg-white bg-opacity-80"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", stiffness: 50 }}
      >
        {/* Header */}
        <motion.h1
          className="text-3xl text-black sm:text-4xl font-semibold mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Welcome to my World!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-black sm:text-xl mb-8 px-4 sm:px-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          Explore who I am, my lifestyle, passions, and much more. Let's
          connect!
        </motion.p>

        {/* Button */}
        <motion.a
          href="#About"
          className="bg-black text-white px-6 py-3 rounded-lg text-lg sm:text-xl font-semibold hover:bg-gray-600 focus:outline-none transition-colors"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 2, delay: 2 }}
        >
          Let's jump in...
        </motion.a>

        {/* Divider */}
        <motion.hr
          className="border-black m-8"
          initial={{ width: "0%" }}
          animate={{ width: "auto" }}
          transition={{ duration: 2, delay: 1.5 }}
        />

        {/* Quote */}
        <motion.p
          className="text-lg mt-4 text-black sm:text-xl mb-8 px-4 sm:px-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
        >
          "You can't fail, until You quit!"
        </motion.p>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-8 left-8 w-12 h-12 rounded-full bg-orange-200 opacity-70"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-orange-300 opacity-70"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2.5,
        }}
      />
    </motion.div>
  );
};

export default Landing;
