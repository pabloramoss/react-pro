import React, { useReducer } from 'react';
import { CounterState} from './interfaces/interfaces';
import { counterReducer } from './state/CounterReducer';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

const CounterReducerComponent: React.FC = ()=> {
  const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch({type:'reset'})
  }
  const increaseBy = (value: number) => {
    dispatch({type: 'increaseBy', payload: {value}})
  }

  return(
    <div>
      <h1>CounterReducerComponent segmentado: {counter}</h1>
      <h2>Previous: {previous}</h2>
      <h2>Changes: {changes}</h2>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}
export default CounterReducerComponent