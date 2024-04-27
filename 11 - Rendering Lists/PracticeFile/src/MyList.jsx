export function MyList({ listArray }) {
  return (
    <ul>
      {listArray.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
