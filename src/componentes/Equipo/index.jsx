//Estilos
import "./equipo.css";

//Módulos
import TarjetaColaborador from "../Tarjeta";

//NPM cambia de color hexa a RGBA
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo, id } = props.equipos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const colorFondo = { backgroundColor: hexToRgba(colorPrimario, 0.6) };
  const colorBorde = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo__content" style={colorFondo}>
          <input
            type="color"
            className="equipo__color"
            value={colorPrimario}
            onChange={(evento) => {
              actualizarColor(evento.target.value, id);
            }}
          />
          <h3 className="equipo__title" style={colorBorde}>
            {titulo}
          </h3>
          <div className="equipo__colaboradores">
            {colaboradores.map((colaborador, index) => (
              <TarjetaColaborador
                key={index}
                datos={colaborador}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
