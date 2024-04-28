import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    e.preventDefault();

    const newTodo = document.getElementById("inputElement").value;

    setTodos([...todos, newTodo]);

    document.getElementById("inputElement").value = "";
  }

  function resetTodos() {
    setTodos([]);
  }

  function removeTodo(index) {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  }
  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Introduce a new ToDo"
          id="inputElement"
          name="todo"
        />
        <button type="submit">Add Todo</button>
        <button onClick={resetTodos}>Reset</button>
      </form>
      <ul key="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => removeTodo(index)}
              style={{ marginLeft: "20px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
