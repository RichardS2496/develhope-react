import "./index.css";

export function Welcome({ name }) {
  return (
    <>
      <p className="welcome">
        Welcome, <strong>{name}</strong>!
      </p>
    </>
  );
}
