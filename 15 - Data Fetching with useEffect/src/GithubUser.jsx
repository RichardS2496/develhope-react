import "./GithubUser.css";
import { useState, useEffect } from "react";

export function GithubUser({ data }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${data}`)
      .then((res) => res.json())
      .then((userInfo) => setUser(userInfo));
  }, [data]);

  return (
    <section className="result-section">
      <div className="img-container">
        <img src={user?.avatar_url} alt="avatar" />
      </div>
      <div className="info-container">
        <h2>{user?.name}</h2>
        <h4>{user?.login}</h4>
        <p>{user?.bio}</p>
      </div>
    </section>
  );
}
