import { CounterDisplay } from "./CounterDisplay";
import { useState } from "react";
import { useEffect } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`The current count is ${counter}`);
  }, [counter]);

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
