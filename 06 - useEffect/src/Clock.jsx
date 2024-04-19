import { useState, useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h2>La hora actual es: {time.toLocaleTimeString()}</h2>
    </>
  );
}
