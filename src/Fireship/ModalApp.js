import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ModalApp = () => {
  return (
    <Container>
      <motion.button
      whileHover={{scale:1.1}}
      whiletap={{scale:0.9}}
      onClick={()=>{}}
      >
        MODAL

      </motion.button>
    </Container>
  )
}

const Container = styled.div`
height: 100svh;
`

export default ModalApp