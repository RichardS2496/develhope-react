import { useState, useRef, useEffect } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const directionRef = useRef("");
  const prevCounterRef = useRef(counter);

  useEffect(() => {
    if (counter !== prevCounterRef.current) {
      console.log(directionRef.current);
      prevCounterRef.current = counter;
    }
  }, [counter]);

  function counting() {
    setCounter(counter + 1);
    directionRef.current = "👆Arriba";
  }
  function restartCounter() {
    setCounter(0);
    directionRef.current = "Desde el Comienzo";
  }

  function decrementing() {
    if (counter > 0) {
      setCounter(counter - 1);
      directionRef.current = "👇Abajo";
      //   consultar
    }
  }

  return (
    <>
      <h1>{counter}</h1>
      <h4>{directionRef.current}</h4>
      <button onClick={counting}>Increment</button>
      <button onClick={decrementing}>Decrement</button>
      <button onClick={restartCounter}>Restart</button>
    </>
  );
}
