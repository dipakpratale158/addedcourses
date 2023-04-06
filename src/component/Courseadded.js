import React from "react";

// const Courseadded = (props) => {
//   const [dele, setdele] = useState(false);
//   const handleclick = (event) => {
//     setdele(prev=>{
//       return !prev
//     });
//   };
//   return (
//     <div onClick={handleclick}>
//       <li style={{ textDecoration: dele?"line-through":"none" }}>{props.item}</li>
//     </div>
//   );
// };

const Courseadded = (props) => {
  return (
    <div onClick={() => props.deleteitems(props.id)}>
      <li>{props.item}</li>
    </div>
  );
};
export default Courseadded;
