import { useState } from 'react'
import './App.css'
import Citas from './components/Citas/';
import Formulario from './components/Formulario/'
import Listado from './components/Listado/'

function App() {
  //const [count, setCount] = useState(0)
  const [cita] = useState([
    { nombreMascota: "Luna",
    dueñoMascota : "Fran",
    fecha : "11/07/2001",
    hora : "10:05",
    sintomas : "Fiebre"
    },
    { 
      nombreMascota: "Bun",
      dueñoMascota: "Carlos",
      fecha: "12/07/2001",
      hora: "14:30",
      sintomas: "Tos"
    },
    { 
      nombreMascota: "Rocky",
      dueñoMascota: "Ana",
      fecha: "13/07/2001",
      hora: "09:00",
      sintomas: "Cansancio"
    }  
  ]);

  return (
    <>
      <Formulario/>
      <Listado cita={cita}/>
    </>
  )
}

export default App
