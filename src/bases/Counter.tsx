import React, { useState } from 'react';

interface Props {
  initialValue: number;
}

const Counter: React.FC<Props> = ({initialValue})=> {
  const [counter,setCounter] = useState(initialValue)

  const handleClick = () => {
    setCounter(prev => prev +1)
  }

  return(
    <div>
      <h1>Counter</h1>
      <button onClick={handleClick}>+1</button>
      <h2>{counter}</h2>
    </div>
  )
}
export default Counter