import { Color } from "./Color";

export function Colores({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={colors.id} color={color} />
      ))}
    </ul>
  );
}
