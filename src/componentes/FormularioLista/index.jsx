import "./formularioLista.css";

//Metodo map -> arreglo.map ((equipo, index) => { return <option value=""></option> })
const FormularioLista = (props) => {
  const { setEquipo, valor, equipos } = props;

  const manejarCambio = (e) => {
    setEquipo(e.target.value);
  };

  return (
    <div className="formulario__lista_opciones">
      <label htmlFor="">equipos</label>
      <select value={valor} onChange={manejarCambio}>
        <option value="" defaultValue="" hidden disabled>
          Seleccionar equipo
        </option>

        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormularioLista;
