import React, { useState } from 'react';

interface Props {
  initialValue?: number;
}
interface CounterState {
  counter: number;
  clicks: number;
}

const CounterBy: React.FC<Props> = ({initialValue = 5})=> {
  const [counterState,setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  })

  const {counter, clicks} = counterState
  const handleClick = (value: number) => {
    setCounterState(({counter, clicks}) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }))
  }

  return(
    <div>
      <h1>CounterBy {counter}</h1>
      <h1>Clicks {clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </div>
  )
}
export default CounterBy