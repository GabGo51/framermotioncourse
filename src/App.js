import BasicsOfMotion from "./originalCode/BasicsOfMotions";
import Gestures from "./originalCode/Gestures";
import MyBasicsOfMotion from "./myCode/MyBasicsOfMotions";
import MyGestures from "./myCode/MyGestures";
import AnimationControls from "./originalCode/AnimationControls";
import MyAnimationControls from "./myCode/MyAnimationControls";
import ViewBasedAnimations from "./originalCode/ViewBasedAnimation";
import MyViewBasedAnimations from "./myCode/MyViewBasedAnimation";
import ScrollAnimations from "./originalCode/ScrollAnimations";
import MyScrollAnimations from "./myCode/MyScrollAnimations";
import Modal from "./Fireship/ModalApp";
import View from "./myCode/View";
import { motion, MotionConfig } from "framer-motion";
import Scroll from "./myCode/Scroll";
function App() {
  return (
    <div className="App">
      <Modal/>
      {/* <BasicsOfMotion/> */}
      <MyBasicsOfMotion />
      {/* <Gestures/> */}
      <MyGestures />
      {/* <AnimationControls/> */}
      <MyAnimationControls/>
      {/* <ViewBasedAnimations/> */}
      <MyViewBasedAnimations/>
      {/* <ScrollAnimations/> */}
      <MyScrollAnimations/>
      <MotionConfig transition={{duration:1}}>
      <View/> 
      </MotionConfig>
      <Scroll/>
      
      
      
    </div>
  );
}

export default App;
