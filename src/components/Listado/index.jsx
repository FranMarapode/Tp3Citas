import Citas from '../Citas/index';

function Listado({ cita }) {
  return (
    <>
      <h2>Listado de Citas</h2>
      {cita.map((cita, index) => (
        <Citas
          key={index}
          nombreMascota={cita.nombreMascota}
          dueñoMascota={cita.dueñoMascota}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        />
      ))}
    </>
  );
}

export default Listado;
