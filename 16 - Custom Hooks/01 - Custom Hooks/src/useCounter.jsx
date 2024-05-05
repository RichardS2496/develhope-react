import { useState } from "react";

export function useCounter(initValue = 0) {
  const [counter, setCounter] = useState(initValue);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function resetCounter() {
    setCounter(initValue);
  }

  return {
    counter: counter,
    increment: incrementCounter,
    decrement: decrementCounter,
    reset: resetCounter,
  };
}
