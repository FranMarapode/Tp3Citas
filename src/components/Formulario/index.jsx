import React, { useState } from "react";
import './formulario.css';

function Formulario({ agregarCita }) {
  const [newCita, setNewCita] = useState({
    nombreMascota: '',
    dueñoMascota: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCita({
      ...newCita,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;
    agregarCita(newCita);
    setNewCita({
      nombreMascota: '',
      dueñoMascota: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
    
  };

  const validarFormulario = () => {
      const { nombreMascota, dueñoMascota, fecha, hora, sintomas } = newCita;
    
      if (
        nombreMascota.trim() === '' ||
        dueñoMascota.trim() === '' ||
        fecha.trim() === '' ||
        hora.trim() === '' ||
        sintomas.trim() === ''
      ) {
        alert("Todos los campos son obligatorios.");
        return false;
      }
      return true;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Nombre Mascota</label>
        <input
          type="text"
          name="nombreMascota"
          class="u-full-width"
          placeholder="Nombre Mascota"
          value={newCita.nombreMascota}
          onChange={handleChange}
        />
      <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueñoMascota"
          class="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={newCita.dueñoMascota}
          onChange={handleChange}
        />
      <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          class="u-full-width"
          value={newCita.fecha}
          onChange={handleChange}
        />
      <label>hora</label>
        <input
          type="time"
          name="hora"
          class="u-full-width"
          value={newCita.hora}
          onChange={handleChange}
        />
      <label>Sintomas</label>
        <textarea
          name="sintomas"
          class="u-full-width"
          value={newCita.sintomas}
          onChange={handleChange}
        ></textarea>
      <button type="submit" class="u-full-width button-primary">
        Agregar Cita
      </button>
      </form>
    </>
  );
}

export default Formulario;
