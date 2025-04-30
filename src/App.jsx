import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/'
import Listado from './components/Listado/'

function App() {
 
  const [cita, setCitas] = useState([
    { nombreMascota: "Luna",
    dueñoMascota : "Fran",
    fecha : "11/07/2001",
    hora : "10:05",
    sintomas : "Fiebre"
    },
    { 
      nombreMascota: "Tom",
      dueñoMascota: "Willy",
      fecha: "22/09/1990",
      hora: "14:30",
      sintomas: "Tos"
    } 
  ]);

const deleteCita = (index) => {
  const nuevasCitas = [...cita];
  if (confirm("¿Estas seguro de eliminar esta cita?")) {
    nuevasCitas.splice(index, 1)
  }
  
  
  setCitas(nuevasCitas);
}

 const agregarCita = (newCita) => {

  if (confirm("¿Estas seguro de querer agregar esta cita?")) {
    setCitas([...cita, newCita])
  }    
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
            <Listado cita={cita} deleteCita={deleteCita}/>
          </div>
        </div>
      </div>
    </>

  )
}

export default App

