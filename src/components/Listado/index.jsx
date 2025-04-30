import Citas from '../Citas/index';


function Listado({ cita }) {
  return (
    <>
 
      
        {cita.map((cita, index) => (
            <Citas
            key={index}
            nombreMascota={cita.nombreMascota}
            dueñoMascota={cita.nombreDueño}
            fecha={cita.fecha}
            hora={cita.hora}
            sintomas={cita.sintomas}
            />
        ))}
  
    </>
  );
}

export default Listado;
