import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import img from "../img/eva2.PNG";
const View = () => {

  const initial = {
    opacity: 0,
    x: 50,
  };

  const h1animation = {
    opacity: 1,
    x: 0,
  };

  const panimation = {
    opacity: 1,
    y: 50,
    x: 0,
  };

  const imageInitial = {
    opacity: 0,
    x: -50,
  };

  const imageAnimation = {
    opacity: 1,
    x: 0,
  };

  const AnimatedImage = () => (
    <motion.img
      initial={imageInitial}
      whileInView={imageAnimation}
      transition={{ duration: 2 }}
      src={img}
    />
  );

  return (
    <Container>
      <div className="section black">
        <div className="frame">
          <div>
            <motion.h1
              whileInView={h1animation}
              initial={initial}
              transition={{ duration: 1 }}
            >
              TEST 1
            </motion.h1>
            <motion.p
              initial={initial}
              whileInView={panimation}
              transition={{ duration: 1 }}
            >
              this is sum random text hihi
            </motion.p>
          </div>
          <AnimatedImage/>
        </div>
      </div>

      <div className="section white">
        <header>
          <div>
            <img src={img}/>
            <ul>
              <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:.6}}>HELLO</motion.li>
              <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:.8}}>HELLO</motion.li>
              <motion.li initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:1}}>HELLO</motion.li>
            </ul>
          </div>
          <motion.div className="bottom-bar" initial={{scaleX:0}} whileInView={{scaleX:1}} transition={{duration:1}}></motion.div>
        </header>
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

  header {
    width: 90vw;
    div{
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    ul{
      display: flex;
      list-style-type: none;

      li{
        cursor: pointer;
        margin-left: 40px;
        transition: 400ms;
        &:hover{
          scale: 1.1;
        }
      }
    }


    .bottom-bar{
      height: 1px;
      background-color: black;
      width: 100%;
      transform-origin: left center;
    }
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
