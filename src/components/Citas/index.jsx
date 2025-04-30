import './citas.css';

function Citas({nombreMascota, dueñoMascota, fecha, hora, sintomas, deleteCita, index}) {
    return(<>

        <div className="cita"> 
            <p>Mascota: <span>{nombreMascota}</span></p>
            <p>Dueño: <span>{dueñoMascota}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button class="button elimnar u-full-width" onClick={() => deleteCita(index)}>Eliminar ×</button>
        </div>
    </>)    
    }
export default Citas