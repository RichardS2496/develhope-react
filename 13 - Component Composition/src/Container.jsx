import { useState } from "react";

export function Container({ title, children }) {
  const [toggle, setToggle] = useState(false);
  const containerStyle = {
    backgroundColor: "white",
    border: "2px solid red",
  };

  function handleToggleSection() {
    setToggle(!toggle);
  }
  return (
    <>
      <h2 onClick={handleToggleSection}>{title}</h2>

      {toggle && <div style={containerStyle}>{children}</div>}
    </>
  );
}
