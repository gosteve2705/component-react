import React, { useState } from "react";

function TodoItem(props) {
  const { isClicked, setisClicked } = useState(false);
  function handleClick() {
    setisClicked(prevValue => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isClicked ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
