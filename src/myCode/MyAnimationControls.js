import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const MyAnimationControls = () => {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start('flip')
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button onClick={handleClick} className="example-button">
        Flip it!
      </motion.button>
      {/* variants are like variable for styles redifine using a string */}
      <motion.div
        initial="initial"
        whileHover="flip"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        style={{
          width: 150,
          height: 150,
          backgroundColor: "black",
        }}
        animate = {controls}
      >
        
      </motion.div>
    </div>
  );
};

export default MyAnimationControls;
