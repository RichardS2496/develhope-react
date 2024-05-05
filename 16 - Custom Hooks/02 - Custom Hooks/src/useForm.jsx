import { useState } from "react";

export function useForm(type) {
  const [value, setValue] = useState("");
  function onChange(e) {
    setValue(e.target.value);
  }

  function resetValue() {
    setValue("");
  }

  return {
    type,
    value,
    onChange,
    resetValue,
  };
}
