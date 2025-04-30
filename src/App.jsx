import { useState } from 'react'
import './App.css'
import Citas from './components/Citas/';
import Formulario from './components/Formulario/'
import Listado from './components/Listado/'

function App() {
  //const [count, setCount] = useState(0)
  const [cita, setCitas] = useState([
    { nombreMascota: "Luna",
    nombreDueño : "Fran",
    fecha : "11/07/2001",
    hora : "10:05",
    sintomas : "Fiebre"
    },
    { 
      nombreMascota: "Bun",
      nombreDueño: "Carlos",
      fecha: "12/07/2001",
      hora: "14:30",
      sintomas: "Tos"
    } 
  ]);

 const agregarCita = (newCita) => {

    setCitas([...cita, newCita])
 }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario agregarCita={agregarCita}/>
          </div>
          <div class="one-half column">
            <h2>Listado de Citas</h2>
            <Listado cita={cita}/>
          </div>
        </div>
      </div>
    </>

  )
}

export default App

