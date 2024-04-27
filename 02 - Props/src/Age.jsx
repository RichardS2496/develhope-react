export function Age({ age }) {
  // return <p>Your age is {age}.</p>;

  return <p>{age >= 18 ? `Your age is ${age}.` : "You are very young!"}</p>;
}
