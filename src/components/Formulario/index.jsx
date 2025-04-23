function Formulario() {
    
    return <>
            <form>
              <label>Nombre Mascota</label>
              <input type="text" name="mascota" placeholder="Nombre Mascota"/>

              <label>Nombre Dueño</label>
              <input type="text" name="propietario" placeholder="Nombre dueño de la mascota"/>

              <label>Fecha</label>
              <input type="date" name="fecha"/>

              <label>hora</label>
              <input type="time" name="hora"/>

              <label>Sintomas</label>
              <textarea name="sintomas" className="u-full-width"></textarea>
              
              <button type="submit" className="u-full-width button-primary">
                Agregar Cita
              </button>
            </form>
        </>
    
}

export default Formulario