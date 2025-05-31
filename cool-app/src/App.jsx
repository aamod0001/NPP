import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function HelloWorld() {
  return ( <h1>Hello world </h1> )
}



export default function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <>
      <HelloWorld />
      <HelloWorld />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <button className="square">X</button>
      </div>
    </>
  )
}

