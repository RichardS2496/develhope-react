import { useState } from "react";
import "./App.css";
import { GithubUser } from "./GithubUser";
import { GithubUsersForm } from "./GithubUsersForm";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <h1>GitHub Checker</h1>
      <p className="subtitle">
        Here you can check the GitHub profile whatever you want.
      </p>
      <GithubUsersForm setUser={setUser} />
      <hr></hr>
      <GithubUser data={user} />
    </>
  );
}

export default App;
