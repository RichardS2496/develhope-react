import { AlertClock } from "./AlertClock";
import "./App.css";

function App() {
  function getCurrentTime() {
    const currentTime = new Date();

    alert(`The current time is ${currentTime.toLocaleTimeString()}`);
  }
  return (
    <>
      <AlertClock titleBtn="Current Time" onClick={getCurrentTime} />
    </>
  );
}

export default App;
