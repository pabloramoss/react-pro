import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap"

const MAXIMUN_VALUE = 10

const CounterEffect: React.FC = ()=> {
  //With useRef, we are getting the reference of that specific node
  const counterElement = useRef<HTMLHeadingElement>(null)
  const [counter,setCounter] = useState(5)

  const handleClick = () => {
    setCounter( prev => Math.min( prev + 1, MAXIMUN_VALUE)) 

  }

  useEffect(() => {
    if (counter < MAXIMUN_VALUE) return

      console.error("Valor maximo alcanzado")

      const timeline = gsap.timeline()

      timeline.to(counterElement.current,{ y: -10, duration: 0.4, ease: "ease.out"})
      timeline.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out"})

  }, [counter])
  
  return(
    <div>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
export default CounterEffect