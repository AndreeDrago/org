import "./miOrg.css";
import { useState } from "react";

const MiOrg = (props) => {
  const { cambiarEstado } = props;
  // const [nombreVariable, funciónActualizada] = useState(valorInicial)
  //   const [mostrar, actualizarEstado] = useState(true);

  //   const manejarClick = () => {
  //     actualizarEstado(!mostrar);
  //   };

  return (
    <section className="orgSection">
      <h3 className="title">Mi Organización</h3>
      <img src="/img/add.png" alt="add" onClick={cambiarEstado} />
    </section>
  );
};

export default MiOrg;
