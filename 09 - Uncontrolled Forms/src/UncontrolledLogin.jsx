export function UncontrolledLogin() {
  function onLogin(e) {
    e.preventDefault();

    // const username = e.target.elements.namedItem("username").value;
    // const password = e.target.elements.namedItem("password").value;
    // const checkbox = e.target.elements.namedItem("checkbox").value;

    //Eneste punto estoy creandouna instancia de FormData a partir del formulario
    const formData = new FormData(e.target);

    //Necesito obtener los valores de cada input
    const username = formData.get("username");
    const password = formData.get("password");

    //El checkbox tiene un comportamiento diferente, por lo que debo verificar su estado antes

    const checkbox = formData.get("checkbox") === "on";

    console.log(username, password, checkbox);
  }
  return (
    <>
      <form onSubmit={onLogin}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="checkbox" name="checkbox" />

        <button>Login</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
}

//VENTAJAS
//Creo que es mas preciso al momento de ingresar a los datos del formulario.

//Desconozco desventajas , no he usado esto antes
