import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsersForm() {
  const [username, setUsername] = useState("");
  const [usersArray, setUsersArray] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setUsersArray([...usersArray, username]);
  }

  function handleOnChange(e) {
    setUsername(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleOnChange}
          placeholder="Introduce a GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      <hr></hr>
      {usersArray.map((user, index) => {
        return <GithubUser key={index} data={user} />;
      })}
    </>
  );
}
