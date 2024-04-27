import { MyList } from "./MyList";

const items = [
  { name: "John", id: 1 },
  { name: "Mike", id: 2 },
  { name: "Maria", id: 3 },
  { name: "Alice", id: 4 },
  { name: "Bob", id: 5 },
  { name: "Charlie", id: 6 },
  { name: "Diana", id: 7 },
  { name: "Eva", id: 8 },
  { name: "Frank", id: 9 },
  { name: "Grace", id: 10 },
];
function App() {
  return (
    <>
      <MyList listArray={items} />
    </>
  );
}

export default App;
