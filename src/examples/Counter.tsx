import React from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = React.useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    !counter ? handleReset() : setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div>
      <h2>Counter </h2>
      <p>The current count is {counter}</p>
      <button onClick={handleDecrement}>- 1</button>
      <button onClick={handleIncrement}>+ 1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
