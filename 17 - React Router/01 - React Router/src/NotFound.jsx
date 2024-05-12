import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <h2>ERROR 404</h2>
      <p>The page does not exist</p>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
}
