import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './bases/Counter'
import CounterBy from './bases/CounterBy'
import CounterEffect from './bases/CounterEffect'
import CounterHook from './bases/CounterHook'
// import CounterReducerComponent from './bases/CounterReducerComponent'
import CounterReducerComponent from "./counter-reducer/CounterReducerComponent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Counter initialValue={2} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </div>
  )
}

export default App
