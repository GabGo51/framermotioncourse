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

function App() {
  return (
    <div className="App">
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
      
    </div>
  );
}

export default App;
