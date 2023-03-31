import { useState } from 'react'
import './App.css'
import week1 from './data/weekexample.json'
// import Week from './components2/Week'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Time Tyrant</h1>
      <div className="week-container">
        <Week key={week1.week1.day} week={week1.week1}/>
    </div>
    </div>
  )
}

export default App
