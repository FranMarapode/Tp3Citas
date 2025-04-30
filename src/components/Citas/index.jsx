function Citas({nombreMascota, nombreDueño, fecha, hora, sintomas}) {
    return(<>

        <div className="cita"> 
            <p>Mascota: <span>{nombreMascota}</span></p>
            <p>Dueño: <span>{nombreDueño}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
    </>)    
    }
export default Citas