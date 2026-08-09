import "./Loader.css";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Ashwi.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        MERN STACK DEVELOPER
      </motion.p>

      <motion.div
        className="progress"
        initial={{ width: 0 }}
        animate={{ width: "240px" }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Loading Portfolio...
      </motion.span>
    </motion.div>
  );
};

export default Loader;