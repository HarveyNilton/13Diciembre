import { useState } from 'react'
import './App.css'
import Focos from './componentes/Focos'

function App() {
  const [count, setCount] = useState(0)
/*
  const increment =()=>{
    setCount(count+1)
   
  }
  
  <h1>{count}</h1>
      <button>Decremento</button>
      <button onClick={increment}>Incremento</button>
    */

  return (
    <div className="App">
      <Focos/>
      </div>
  )
}

export default App
