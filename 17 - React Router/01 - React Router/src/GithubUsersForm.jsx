import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function GithubUsersForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/users/${username}`);
  }

  function handleOnChange(e) {
    setUsername(e.target.value);
  }

  return (
    <>
      <h1>/users</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleOnChange}
          placeholder="Introduce a GitHub username"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
