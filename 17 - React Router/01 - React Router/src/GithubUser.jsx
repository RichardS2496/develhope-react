import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GithubUser.css";

export function GithubUser() {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [username]);

  if (!data) {
    return <p> Check again </p>;
  }

  return data ? (
    <section className="result-section">
      <div className="img-container">
        <img src={data.avatar_url} alt="avatar" />
      </div>
      <div className="info-container">
        <h2>{data.name}</h2>
        <h4>{data.login}</h4>
        <p>{data.bio}</p>
      </div>
    </section>
  ) : (
    <p>Loading...</p>
  );
}
