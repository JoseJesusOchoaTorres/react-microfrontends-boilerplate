import React, { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);
  return (
    <div>
      <h1 className="mt-10 text-3xl text-purple-900">Counter App</h1>
      <p>
        Current count: <strong>{count}</strong>
      </p>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};
