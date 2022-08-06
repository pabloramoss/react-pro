import React, { useEffect, useState } from 'react';
import { gsap } from "gsap"

const MAXIMUN_VALUE = 10

const CounterEffect: React.FC = ()=> {
  const [counter,setCounter] = useState(5)

  const handleClick = () => {
    setCounter(prev => prev + 1)

  }

  useEffect(() => {
    if (counter < MAXIMUN_VALUE) return

    else {
      console.error("Valor maximo alcanzado")

      // Gsap function are promises
      gsap.to("h2",{ y: -10, duration: 0.4, ease: "ease.out"}).then(() => {
        gsap.to("h2", { y: 0, duration: 1, ease: "bounce.out"})
      })
    }
  }, [counter])
  
  return(
    <div>
      <h1>CounterEffect:</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
export default CounterEffect