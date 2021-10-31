import { useState } from "react";

function Counter() {
  const [counterState, setCounterState] = useState(0);
  const title = "Hello Ghada and Ali!";
  let counterVariable = counterState * 5;
  // counterVariable++
  // counterVariable = counterVariable + 1
  const increment = () => {
    // counterVariable++;
    setCounterState(counterState + 1);
    console.log(counterVariable);
  };
  const decrement = () => {
    // counterVariable--;
    setCounterState(counterState - 1);
    console.log(counterVariable);
  };
  return (
    <>
      <h1>{title}</h1>
      <button onClick={increment}>PLUS</button>
      <h3>Variable: {counterVariable}</h3>
      <h3>State: {counterState}</h3>
      <button onClick={decrement}>MINUS</button>
    </>
  );
}

export default Counter;
