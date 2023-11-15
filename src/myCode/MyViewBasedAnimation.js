import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const MyViewBasedAnimations = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  
   useEffect(()=>{
    console.log('yeur');
  }, [isInView])

  return (
    <>
      <div style={{ height: "150vh" }} />
      <motion.div
      style={{height:'100vh', backgroundColor:'black'}}
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      >
    

      </motion.div>

      <div style={{
        height:'100vh',
        backgroundColor: isInView ? "blue":'red',
        transition:'1s'
        }} ref={ref}></div>
      
    </>
  );
};

export default MyViewBasedAnimations;