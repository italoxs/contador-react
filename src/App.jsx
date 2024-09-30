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
    <section>
    <h1>Contador 1</h1>
    <p>{number}</p>
    <div>
      <button className="btnDecrease" type="button" onClick={decrease}>-</button>
      <button className="btnIncrease" type="button" onClick={increase}>+</button>
    </div>
    </section>
    </>
  );
}