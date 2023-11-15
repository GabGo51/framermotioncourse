import React from "react";
import { motion, MotionConfig } from "framer-motion";

const MyGestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      {/* kinda like global css but for whats inside of the tags */}
      <MotionConfig transition={{ duration: 0.123, ease: "easeInOut" }}>
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="example-button"
        >
          Click me!
        </motion.button>

        <motion.button
          style={{ backgroundColor: "red" }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="example-button"
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default MyGestures;
