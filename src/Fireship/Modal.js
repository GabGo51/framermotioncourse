import React from "react";
import Backdrop from "./Backdrop";
import styled from "styled-components";

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <Container onClick={(e) => e.stopPropagation()}></Container>
    </Backdrop>
  );
};

const Container = styled(motion.div)``;

export default Modal;
