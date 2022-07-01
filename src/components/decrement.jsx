import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { decrement } from "../Redux/features/toDo";

export default function Decrement() {
  //trigger action
  const dispatchDecrement = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatchDecrement(decrement())}
        className="btn btn-primary px-5 me-5"
      >
        -
      </button>
    </div>
  );
}
