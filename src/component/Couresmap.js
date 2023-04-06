import React from 'react'
import Courseadded from './Courseadded'
const Couresmap = (props) => {
  return (
    <div>  <ul>
    {props.items.map((todoitem, index) => (
      <Courseadded
        ket={index}
        id={index}
        item={todoitem}
        deleteitems={props.onDeleteItem}
      />
    ))}
  </ul></div>
  )
}

export default Couresmap