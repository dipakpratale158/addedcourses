import { useState } from "react";
import styled from "./styles.module.css";
// import Courseadded from "./component/Courseadded";
import Button from "./component/Button";
import Couresmap from "./component/Couresmap";
import Inputarea from "./component/Inputarea";
// import styled  from "styled-components";

// const FormControl=styled.div`

//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid #ccc;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// &.invalid input {
//   border-color: red;
//   background: lightgoldenrodyellow;
// }

// &.invalid label {
//   color: red;
// }

// `;

//////////using props
// const FormControl=styled.div`

//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color:${props=>(props.invalid?'red':'black')}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props=>(props.invalid?"red":"black")};
//   background:${props=>props.invalid?'#ffd7d7':'transparent'}
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `;

function App() {
  const [item, setitem] = useState([]);

  // const [item, setitem] = useState([
  //   { item: "Do all exercises!" , id:"g1"},
  //   { item: "Finish the course!", id: "g2" }
  // ]);

  const addGoalHandler = (inputtext) => {
    setitem((prev) => {
      return [...prev, inputtext];
    });
  };

  // const addGoalHandler = (inputtext) => {
  //   setitem((prev) => {
  //     const updategoal=[...prev]
  //     updategoal.unshift({ item: inputtext, id: Math.random().toString() });
  //     return updategoal
  //   });
  // };

  const deleteitem = (id) => {
    setitem((prev) => {
      return prev.filter((item, index) => index !== id);
    });
  };

  let content = <p>No goals found. Maybe add one?</p>;
  if (item.length > 0) {
    content = <Couresmap items={item} onDeleteItem={deleteitem} />;
  }

  return (
    <div>
      <Inputarea onAddGoal={addGoalHandler} />

      <div>
        {content}
        {/* <Couresmap  items={item} onDeleteItem={deleteitem}/> */}
      </div>
    </div>
  );
}
export default App;
