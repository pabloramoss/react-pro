import React, { useEffect, useState } from 'react';

const MAXIMUN_VALUE = 10

const CounterEffect: React.FC = ()=> {
  const [counter,setCounter] = useState(5)

  const handleClick = () => {
    setCounter(prev => prev + 1)

  }

  useEffect(() => {
    if (counter < 10) return

    else {
      console.error("Valor maximo alcanzado")
    }
  }, [counter])
  
  return(
    <div>
      <h1>CounterEffect: {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
export default CounterEffect