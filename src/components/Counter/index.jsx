import { motion } from "framer-motion"
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

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <motion.section
      initial= 'initial'
      animate= 'animate'
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
    <h1>
      {props.name}
    </h1>
    <p>
      {number}
    </p>
    <div>
      <button className="btnDecrease" type="button" onClick={decrease}>-</button>
      <button className="btnIncrease" type="button" onClick={increase}>+</button>
    </div>
    </motion.section>
  )
}

