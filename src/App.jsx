import { useState } from 'react'
import './App.css'
import week1 from './data/weekexample.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Time Tyrant!</h1>
      <div className="week-container">

    </div>
    </div>
  )
}

export default App
