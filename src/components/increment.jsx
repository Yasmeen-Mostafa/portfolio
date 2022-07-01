import React from "react";
import { increment } from "../Redux/features/toDo";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
export default function Increment() {
  const dispatchIncrement = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatchIncrement(increment())}
        className="btn btn-success px-5"
      >
        +
      </button>
    </div>
  );
}
