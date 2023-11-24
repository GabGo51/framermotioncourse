import React from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import img from "../img/eva2.PNG";
import { useRef } from "react";

const View = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})


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

  

  return (
    <Container>
      <div className="section black">
        <div className="frame">
          <div>
            {/*viewport is the thing to make it go once*/}
            <motion.h1 ref={ref} initial={initial} whileInView={h1animation} viewport={{once:true}}>
              TEST 1
            </motion.h1>
            <motion.p initial={initial} whileInView={panimation}>
              this is sum random text hihi
            </motion.p>
          </div>
          <motion.img
      initial={imageInitial}
      whileInView={imageAnimation}
      src={img}
    />
        </div>
      </div>

      <div className="section white">
        <header>
          <div>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{delay: 0.8 }}
              viewport={{once:true}}
              src={img}
            />
            <ul>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay: 0.6 }}
                viewport={{once:true}}
              >
                HELLO
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{once:true}}
              >
                HELLO
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{once:true}}
              >
                HELLO
              </motion.li>
            </ul>
          </div>
          <motion.div
            className="bottom-bar"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{once:true}}
            
          ></motion.div>
        </header>
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
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    ul {
      display: flex;
      list-style-type: none;

      li {
        cursor: pointer;
        margin-left: 40px;
        transition: 400ms;
        &:hover {
          scale: 1.1;
        }
      }
    }

    .bottom-bar {
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

    h1 {
      opacity: 0;
      transform: translateX(50px);
    }
  }
`;

export default View;
