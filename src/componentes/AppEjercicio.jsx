
import { useState } from "react"


function AppEjercicio() {
    const [hello, setHello] = useState('Hola Mundo')
  
    const cambio = 'Soy Harvey '
  
    const cambiarMensaje =()=>{
      if (hello=='Hola Mundo') {
        setHello(cambio)
      }else{
         setHello('Hola Mundo')
      }
       
     
    }
 
    return (
      <div className="App">
        <h1>{hello}</h1>
        <button onClick={cambiarMensaje}>Cambiar Texto</button>
      </div>
    )
  }
  
  export default AppEjercicio