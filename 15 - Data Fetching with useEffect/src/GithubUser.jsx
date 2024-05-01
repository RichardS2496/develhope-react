import "./GithubUser.css";

export function GithubUser({ data }) {
  if (!data) {
    return <p> Check again </p>;
  }

  return data ? (
    <p></p>
  ) : (
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
  );
}
