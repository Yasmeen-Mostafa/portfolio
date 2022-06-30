import React from "react";

export default function Increment({ IncreamentCounterButton }) {
  return (
    <div>
      <button
        onClick={IncreamentCounterButton}
        className="btn btn-success px-5"
      >
        +
      </button>
    </div>
  );
}
