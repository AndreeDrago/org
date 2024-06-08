//Estilos
import "./App.css";

//React
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Módulos
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import MiOrg from "./componentes/miOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

function App() {
  const [mostrarFormulario, actualizarEstado] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),

      equipo: "Front End",
      foto: "https://github.com/AndreeDrago.png",
      nombre: "Andree",
      puesto: "Desarrollador Web y estudiante",
      fav: true,
    },
    {
      id: uuidv4(),

      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false,
    },
    {
      id: uuidv4(),

      equipo: "Programación",
      foto: "https://github.com/genesysR-dev.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuidv4(),

      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuidv4(),

      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuidv4(),

      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),

      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),

      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),

      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),

      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),

      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),

      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);
  // ternario --> condición ? seMuesta : noSeMuestra
  const cambiarEstado = () => {
    actualizarEstado(!mostrarFormulario);
  };
  //*Registrar Colaborafor

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);
    //!Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //*Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id);
    const colaboradoresActualizado = colaboradores.filter(
      (colaborador) => colaborador.id != id
    );
    actualizarColaboradores(colaboradoresActualizado);
  };

  //*Actualizar Color de equipo

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  //*Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]);
  };

  //*Like
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });

    actualizarColaboradores(colaboradoresActualizados);
  };

  //*Módulos
  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <></>*/}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarEstado={cambiarEstado} />
      {equipos.map((equipo) => {
        return (
          <Equipo
            key={equipo.id}
            equipos={equipo}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
