import BasicsOfMotion from "./originalCode/BasicsOfMotions";
import Gestures from "./originalCode/Gestures";
import MyBasicsOfMotion from "./myCode/MyBasicsOfMotions";
import MyGestures from "./myCode/MyGestures";
import AnimationControls from "./originalCode/AnimationControls";
import MyAnimationControls from "./myCode/MyAnimationControls";

function App() {
  return (
    <div className="App">
      {/* <BasicsOfMotion/> */}
      <MyBasicsOfMotion />
      {/* <Gestures/> */}
      <MyGestures />
      {/* <AnimationControls/> */}
      <MyAnimationControls/>
      
    </div>
  );
}

export default App;
