import "./formularioCampo.css";

const FormularioCampo = (props) => {
  const { actualizarValor, titulo, placeholder, required, valor } = props;

  const { type = "text" } = props;

  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };

  return (
    <div className={`formulario__campo formulario__campo_${type}`}>
      <label htmlFor="">{titulo}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default FormularioCampo;
