import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleCheckChange(e) {
    setCheck(e.target.checked);
  }

  return (
    <>
      <h1>LOGIN.</h1>
      <input onChange={handleUsernameChange} type="text" value={username} />
      <input onChange={handlePasswordChange} type="password" value={password} />
      <input onChange={handleCheckChange} type="checkbox" checked={check} />
    </>
  );
}
