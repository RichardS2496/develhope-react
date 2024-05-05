import { useCounter } from "./useCounter";

export function Counter({ initValue = 0 }) {
  const { counter, increment, decrement, reset } = useCounter(initValue);
  return (
    <>
      <h2>The Counter is: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Restart</button>
    </>
  );
}
