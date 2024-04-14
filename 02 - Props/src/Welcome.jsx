import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <>
      <strong>Welcome, {name}! </strong>
      <Age age={age} />
    </>
  );
}
