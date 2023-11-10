import { useState, useCallback } from 'react'
import './App.scss'
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=b1af9dc988407783a9a7c41508074fdf
function App() {
  const [count, setCount] = useState(0)
   
  
  return (
    <>
      <div className="my-app">
        Hello there
      </div>
    </>
  )
}

export default App
