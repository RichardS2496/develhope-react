import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [time, setTime] = useState(new Date());

  const language = useContext(LanguageContext);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h2>
        {language === "es" ? "La hora actual es: " : "The current time is: "}
        {time.toLocaleTimeString()}
      </h2>
    </>
  );
}
