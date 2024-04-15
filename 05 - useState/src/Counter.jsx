import { CounterDisplay } from "./CounterDisplay";
import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function counting() {
    setCounter(counter + 1);
  }
  function restartCounter() {
    setCounter(0);
  }

  function decrementing() {
    if (counter > 0) {
      setCounter(counter - 1);
      //   consultar
    }
  }

  return (
    <>
      <CounterDisplay counter={counter} />
      <button onClick={counting}>Increment</button>
      <button onClick={decrementing}>Decrement</button>
      <button onClick={restartCounter}>Restart</button>
    </>
  );
}
