import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <>
      <strong>Welcome, {name}! </strong>
      <Age age={age} />
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {18 < age && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name === "John" && <Age age={age} />}
    </>
  );
}
