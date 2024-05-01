import { useEffect, useState } from "react";

export function GithubUsersForm({ setUser }) {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${data}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [data, setUser]); //usando el useEffect se actualiza sin necesidad de hacer click en el boton del formulario, me queda mejor sin el useEffect para la practica y que el consumo de la API se encuentre dentro de la funcion submit

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleOnChange(e) {
    setData(e.target.value);
  }

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
