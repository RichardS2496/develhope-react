import { useEffect, useRef } from "react";

function FocusableInput() {
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <>
      <input ref={inputElement} type="text"></input>
    </>
  );
}

export default FocusableInput;
