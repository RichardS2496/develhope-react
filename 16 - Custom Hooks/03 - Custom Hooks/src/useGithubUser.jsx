import { useState, useEffect } from "react";

export function useGithubUser(setUser) {
  const [data, setData] = useState("");
  useEffect(() => {
    if (data) {
      fetch(`https://api.github.com/users/${data}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [data, setUser]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleOnChange(e) {
    setData(e.target.value);
  }

  return {
    handleOnChange,
    handleSubmit,
    data,
  };
}
