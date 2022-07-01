import React from "react";
import { useSelector } from "react-redux/es/exports";

export default function CounterTitle() {
  const count = useSelector((state) => state.counter.counter);
  return <div className="h3 mb-5 text-center">{count}</div>;
}
