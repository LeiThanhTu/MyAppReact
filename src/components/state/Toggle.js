import React, {useState} from 'react';
import "./ToggleStyles.css"

// + stateless functional component: component nhưng ko sử dụng state

// function Toggle () {
//   return (
//     <div className="toggle">
      
//     </div>
//   );
// };
// // statefull functional component: component có sử dụng state
// function Toggle2(){
// // const [count, setCount] = useState();
//   return (
//     <div className="toggle"></div>
//   )
// }

function Toggle(){
// 1. enable state: useState(initialize valuevalue)
// 2. initalize state: useState(false)
// 3. reading state
// 4. update state
// const array = useState (false)
// console.log(array);  // [false, function]
// console.log(array[0]);
// console.log(array[1]);
// const arr = [1,2];
// console.log(arr[0], arr[1]);
// const [a,b] = [1,2]
// console.log(a,b)
// initialize value: boolean(true, false), number (1,2,3,4), string("evondev"), underfined, null, [1,2,3,4], {title: "Frontend Developer"}
const [on, setOn] = useState(false);
console.log(on);
// console.log(on, setOn);
// [title, setTitle]
// [isActive, setIsActive]
// state changes => re-render 
console.log(on, setOn);

const handleToggle = () => {
   setOn((on) => {
    console.log(on);
    return !on;
   })

 // console.log("clicked");
}

  return (
  <div>
  <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle }>
 <div className={`spinner ${on ? "active" : ""}`}></div>
  </div>
  {/* <div className="toggle-control">
  <div className="toggle-on" onClick={() => setOn(true)}>On</div>
    <div className="toggle-off" onClick={() => setOn(false)}>Off</div>
</div> */}
  </div>
  )
}

export default Toggle;