import Citas from '../Citas/index';
import './listado.css';


function Listado({ cita, deleteCita }) {
  return (
    <>
        {cita.map((cita, index) => (
            <Citas
            index={index}
            nombreMascota={cita.nombreMascota}
            dueñoMascota={cita.dueñoMascota}
            fecha={cita.fecha}
            hora={cita.hora}
            sintomas={cita.sintomas}
            deleteCita={deleteCita}
            
            />
        ))}
  
    </>
  );
}

export default Listado;
