import React from "react";
import useCount from "./hooks/useCount";
const Counter = () => {
  let { count, increase, decrease } = useCount(0);
  return (
    <>
      <button style={{ backgroundColor: "lightgray" }} onClick={increase}>
        Increse
      </button>
      <span>{count}</span>
      <button style={{ backgroundColor: "lightgray" }} onClick={decrease}>
        Decrese
      </button>
    </>
  );
};

export default Counter;
