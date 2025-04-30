import React, { useState } from "react";

function Formulario({ agregarCita }) {
  const [newCita, setNewCita] = useState({
    nombreMascota: '',
    nombreDueño: '',
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
    agregarCita(newCita);
    setNewCita({
      nombreMascota: '',
      nombreDueño: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
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
          name="propietario"
          class="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={newCita.nombreDueño}
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
