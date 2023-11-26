import React, { useRef } from "react";
import styled from 'styled-components'
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const Scroll = () => {

  const ref = useRef(null)
  const {scrollYProgress} = useScroll({target:ref})
  const scrollAmount = useSpring(scrollYProgress, {stiffness:50}) 
  
  const scroll = useTransform(
    scrollYProgress,
    //the two values that tracks the begin and enf of the scrollYvalue
    [0, 1],
    //the changes you wanna see from those values 
    ['50px', '200px']
    //have to use rgb or hex
  )

  return (
    <Container ref={ref}>
      <motion.h1 style={{x:scrollYProgress}}>GIMME THE LOOT</motion.h1>

    </Container>
  )
}

const Container = styled.div`
height: 200vh;


h1{
  
}
`

export default Scroll