import { useState } from "react";

export function Login({ onLogin }) {
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

  const isDisabled = !username || !password;

  function handleLoginClick(e) {
    e.preventDafault();
    onLogin({ username, password, check });
  }

  function handleReset() {
    setUsername("");
    setPassword("");
    setCheck(false);
  }

  return (
    <>
      <form onSubmit={handleLoginClick}>
        <h1>LOGIN.</h1>
        <input onChange={handleUsernameChange} type="text" value={username} />
        <input
          onChange={handlePasswordChange}
          type="password"
          value={password}
        />
        <input onChange={handleCheckChange} type="checkbox" checked={check} />
        <button onClick={handleLoginClick} disabled={isDisabled} type="submit">
          Login/Submit
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </>
  );
}
