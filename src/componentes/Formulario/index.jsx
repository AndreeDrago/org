//Eastilos
import "./formulario.css";

//React
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Módulos
import FormularioCampo from "../FormularioCampo";
import FormularioLista from "../FormularioLista";
import FormularioSupmit from "../FormularioSubmit";

const Formulario = (props) => {
  //Estados
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const { registrarColaborador, equipos, crearEquipo } = props;

  const manejoSubmit = (e) => {
    e.preventDefault();
    let datosEnviados = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
      id: uuidv4(),
    };
    // Información lista para enviar y/o guardar
    registrarColaborador(datosEnviados);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario__content">
      <form onSubmit={manejoSubmit}>
        <h2>Completa el formulario para crear al colaborador</h2>
        <FormularioCampo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          valor={nombre}
          actualizarValor={setNombre}
          required
        />
        <FormularioCampo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          valor={puesto}
          actualizarValor={setPuesto}
          required
        />
        <FormularioCampo
          titulo="Foto"
          placeholder="Ingresar URL de foto"
          valor={foto}
          actualizarValor={setFoto}
          required
        />
        <FormularioLista
          valor={equipo}
          setEquipo={setEquipo}
          equipos={equipos}
        />
        <FormularioSupmit>Crear</FormularioSupmit>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Completa el formulario para crear el equipo</h2>
        <FormularioCampo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          valor={titulo}
          actualizarValor={setTitulo}
          required
        />
        <FormularioCampo
          titulo="Color"
          placeholder="Ingresar color Hex"
          valor={color}
          actualizarValor={setColor}
          type="color"
          required
        />
        <FormularioSupmit>Registrar</FormularioSupmit>
      </form>
    </section>
  );
};

export default Formulario;
