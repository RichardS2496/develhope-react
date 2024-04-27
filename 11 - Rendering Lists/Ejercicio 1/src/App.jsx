import { Colores } from "./Colores";

function App() {
  const colorsArray = [
    { id: 1, name: "Blue" },
    { id: 2, name: "Red" },
    { id: 3, name: "Yellow" },
    { id: 4, name: "Black" },
    { id: 5, name: "White" },
  ];
  return (
    <>
      <Colores colors={colorsArray} />
    </>
  );
}

export default App;
