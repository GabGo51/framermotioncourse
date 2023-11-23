import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence, useAnimationControls, inView, animate } from "framer-motion";
import img from "../img/eva2.PNG";
const View = () => {

  const initial = {
    opacity:0,
    x:50
  }

  const h1animation = {
    opacity:1, 
    x:0
  }

  const panimation = {
    opacity:1,
    y:50,
    x:0,
  }

  return (
    <Container>
      
      <div className="section black">
        <div className="frame">
          <div>
            <motion.h1
              whileInView={h1animation}
              initial={initial}
              transition={{ duration: 1}}
              exit={{
                opacity:0
              }}
            >
              TEST 1
            </motion.h1>
            <motion.p initial = {initial} whileInView={panimation} transition={{ duration: 1}}>this is sum random text hihi</motion.p>
          </div>
          <img src={img} />
        </div>
      </div>
      
      <div className="section white">
        <div className="frame"></div>
      </div>
      <div className="section black">
        <div className="frame"></div>
      </div>
      <div className="section white">
        <div className="frame"></div>
      </div>
      <div className="section black">
        <div className="frame"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  img {
    width: 300px;
    height: 330px;
  }

  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .black {
    background-color: black;
    color: white;
  }

  .frame {
    width: 50vw;
    display: flex;
    justify-content: space-between;
  }
`;

export default View;
