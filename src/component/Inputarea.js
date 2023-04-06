import React,{useState} from "react";
import Button from "./Button";
import styled from "../styles.module.css";

const Inputarea = (props) => {
  const [inputtext, setinputtrext] = useState("");
  const [isvalid, setisvalid] = useState(true);
  const handlechange = (event) => {
    if (event.target.value.trim().length > 0) {
      setisvalid(true);
    }
    setinputtrext(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    if (inputtext.trim().length === 0) {
      setisvalid(false);

      return;
    }
    props.onAddGoal(inputtext);
    setinputtrext("");

  }




  return (

<form onSubmit={handlesubmit}>
        {/* <FormControl  className={`form-control  ${!isvalid ? "invalid" : ""}`}> */}
        {/* <FormControl className={!isvalid && "invalid"}  > */}
        {/* <FormControl invalid={!isvalid} >

        
        <label>Course Goal</label>
        <input
         
          type="text"
          onChange={handlechange}
          value={inputtext}
        />
  </FormControl> */}


{/* <div className={`${styled['form-control']}`} > */}
{/* dynamic class with css module */}
<div className={`${styled['form-control']}  ${!isvalid && styled.invalid}    `} >

        
<label>Course Goal</label>
<input
 
  type="text"
  onChange={handlechange}
  value={inputtext}
/>
</div>

  <Button type="submit">Add Goal</Button>

      </form>
  )}
export default Inputarea;
