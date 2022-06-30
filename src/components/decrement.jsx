import React from "react";

export default function Decrement({ DecrementCounterButton }) {
  return (
    <div>
      <button
        onClick={DecrementCounterButton}
        className="btn btn-primary px-5 me-5"
      >
        -
      </button>
    </div>
  );
}
