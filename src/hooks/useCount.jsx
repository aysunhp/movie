import { useState } from "react";

export default function useCount(x) {
  const [count, setCount] = useState(x);

  function increase() {
    return setCount(count + 1);
  }

  function decrease() {
    return count > 0 ? setCount(count - 1) : setCount(0);
  }

  return {
    count,
    increase,
    decrease,
  };
}
