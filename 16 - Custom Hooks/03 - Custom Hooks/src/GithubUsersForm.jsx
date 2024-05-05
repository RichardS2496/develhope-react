import { useGithubUser } from "./useGithubUser";

export function GithubUsersForm({ setUser }) {
  const { handleOnChange, handleSubmit, data } = useGithubUser(setUser);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={data}
        onChange={handleOnChange}
        placeholder="Introduce a GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
}
