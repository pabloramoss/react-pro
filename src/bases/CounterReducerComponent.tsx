import React, { useReducer } from 'react';
import { doIncreaseBy, doReset } from '../counter-reducer/actions/actions';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

type CounterAction = 
| { type: "increaseBy", payload: { value: number } }
| {type: "reset"};

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      }
      case "increaseBy":
        return {
          counter: state.counter + action.payload.value,
          previous: state.counter,
          changes: state.changes + 1,
        }
    default:
      return state
  }
}

const CounterReducerComponent: React.FC = ()=> {
  const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch(doReset())
  }
  const increaseBy = (value: number) => {
    dispatch(doIncreaseBy(value))
  }

  return(
    <div>
      <h1>CounterReducerComponent: {counter}</h1>
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