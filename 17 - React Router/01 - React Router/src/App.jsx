import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { GithubUser } from "./GithubUser";
import { GithubUsersForm } from "./GithubUsersForm";
import { NotFound } from "./NotFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Welcome View</Link>
          </li>
          <li>
            <Link to="/counter">Counter View</Link>
          </li>
          <li>
            <Link to="/users">GitHub User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Richard" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUsersForm />} />
        <Route path="/users/:username" element={<GithubUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
