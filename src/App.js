import { useState } from "react";

import './App.css'

export default function App() {
  const [number, setNumber] = useState(0)

  function increase() {
    setNumber(number + 1)
  }

  function decrease() {
    setNumber(number - 1)
  }

  return (
    <>
    <section className="contadorOne">
      <h1>Contador 1</h1>
      <p>{number}</p>
      <div>
        <button type="button" onClick={decrease}>-</button>
        <button type="button" onClick={increase}>+</button>
      </div>
    </section>
</>
  );
}