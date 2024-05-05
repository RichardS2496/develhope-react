import { useForm } from "./useForm";

export function Form() {
  const username = useForm("text");
  const password = useForm("password");

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log("Username: ", username.value, ", Password: ", password.value);
    username.resetValue();
    password.resetValue();
  }

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label htmlFor="usernameField">Username</label>
        <input
          placeholder="Introduce an username"
          {...username}
          id="usernameField"
        />
        <label htmlFor="passwordField">Password</label>
        <input
          placeholder="Introduce your password"
          {...password}
          id="passwordField"
        />
        <button
          type="submit"
          style={{ alignSelf: "flex-end", marginTop: "1rem" }}
        >
          Login
        </button>
      </form>
    </>
  );
}
