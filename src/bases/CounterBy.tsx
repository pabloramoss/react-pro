import React, { useState } from 'react';

interface Props {
  initialValue?: number;
}

const CounterBy: React.FC<Props> = ({initialValue = 5})=> {
  const [counter,setCounter] = useState(initialValue)

  const handleClick = () => {
    setCounter(prev => prev +1)
  }

  return(
    <div>
      <h1>CounterBy</h1>
      <button onClick={handleClick}>+1</button>
      <h2>{counter}</h2>
    </div>
  )
}
export default CounterBy