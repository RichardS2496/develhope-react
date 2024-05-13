import "./App.css";
import { GithubUsersForm } from "./GithubUsersForm";

function App() {
  return (
    <>
      <h1>GitHub Checker</h1>
      <p className="subtitle">
        Here you can check the GitHub profile whatever you want.
      </p>
      <GithubUsersForm />
      <hr></hr>
    </>
  );
}

export default App;
