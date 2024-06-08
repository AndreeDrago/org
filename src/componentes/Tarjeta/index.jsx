//Estilos
import "./tarjeta.css";

//Iconos React
import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const TarjetaColaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;

  const colorFondo = { backgroundColor: colorPrimario };

  return (
    <div className="tarjeta__countent">
      <IoIosCloseCircle
        color="white"
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      />
      <div className="tarjeta__titulo" style={colorFondo}>
        <img src={foto} alt="Colaborador" />
      </div>
      <div className="tarjeta__info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? (
          <FaHeart color="red" onClick={() => like(id)} />
        ) : (
          <FaRegHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default TarjetaColaborador;
