import React, { useState } from "react";
import Decrement from "../components/decrement";
import Increment from "../components/increment";
import CounterTitle from "../components/Counter.component";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className=" mt-5 border border-2 border-primary mx-auto mt-5 py-5 w-25">
      <CounterTitle myCounter={counter}></CounterTitle>
      <div className="mx-auto d-flex justify-content-evenly">
        <Decrement DecrementCounterButton={decrementCounter} />
        <Increment IncreamentCounterButton={incrementCounter} />
      </div>
    </div>
  );
}
