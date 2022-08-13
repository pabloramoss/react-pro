import { useCounter } from "../hooks/useCounter"

const CounterHook: React.FC = ()=> {
  const {counter, elementToAnimate, handleClick} = useCounter({ maxCount: 10 })

  return(
    <div>
      <h1>CounterHook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}
export default CounterHook