import "./GithubUser.css";

export function GithubUser({ data }) {
  if (!data) {
    return <p> Waiting for an username </p>;
  }

  return (
    <a className="result-section" href={data.html_url} target="_blank">
      <div className="img-container">
        <img src={data.avatar_url} alt="avatar" />
      </div>
      <div className="info-container">
        <h2>{data.name}</h2>
        <h4>{data.login}</h4>
        <p>{data.bio}</p>
      </div>
    </a>
  );
}
