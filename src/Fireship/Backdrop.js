import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";

const Backdrop = ({ children, onClick }) => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Container>
  );
};

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Backdrop;
