import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0)

  function increase() {
    setNumber(number + 1)
  }

  function decrease() {
    setNumber(number - 1)
  }

  return (
    <section>
      <h1>Contador</h1>
      <p>{number}</p>
      <button type="button" onClick={decrease}>menos</button>
      <button type="button" onClick={increase}>mais</button>
    </section>
  );
}