import {useState} from 'react'
import './styles.css'

export function Counter (props) {
  const [number, setNumber] = useState(0)

  function increase() {
    setNumber(number + 1)
  }

  function decrease() {
    setNumber(number - 1)
  }

  return (
    <section>
    <h1>{props.name}</h1>
    <p>{number}</p>
    <div>
      <button className="btnDecrease" type="button" onClick={decrease}>-</button>
      <button className="btnIncrease" type="button" onClick={increase}>+</button>
    </div>
    </section>
  )
}

