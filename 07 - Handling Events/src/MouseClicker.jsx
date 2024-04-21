export function MouseClicker() {
  function handleBtnClick(e) {
    console.log(e.target.src);
  }

  return (
    <>
      <div>
        <button name="one" onClick={handleBtnClick}>
          <img
            width={32}
            height={32}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png"
            alt="una imagen rota o vacia"
          />
          Click Me!
        </button>
      </div>
    </>
  );
}
