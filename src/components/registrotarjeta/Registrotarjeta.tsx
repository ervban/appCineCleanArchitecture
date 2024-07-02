import React from "react";
import "./registrotarjeta.css";
import Navbarusers from "../../common/navbarUsers/Navbarusers";
import { Link } from "react-router-dom";
import Formulario from "../../common/Formulario/Formulario";

const camposFormulario = [
  {
    name: "Nombre completo",
    type: "text",
    placeholder: "Nombre completo",
  },
  {
    name: "Numero Tarjeta",
    type: "text",
    placeholder: "0000 0000 0000 0000",
  },
  {
    name: "Fecha de expiracion",
    type: "text",
    placeholder: "01/23",
  },
  {
    name: "CVV",
    type: "text",
    placeholder: "CVV",
  },
];

export default function Registrotarjeta() {
  const manejarEnvio = (datosFormulario:any) => {
    console.log(datosFormulario);
    // Aquí puedes manejar los datos del formulario, como enviarlos a un servidor
  };

  return (
    <div>
      <Navbarusers />
      <div className="login-box">
        <h2>REGISTRO TARJETA</h2>
        <Formulario fields={camposFormulario} onSubmit={manejarEnvio} />
        <Link to="/registro">
          <button className="siguiente"> Continuar</button>
        </Link>
      </div>
    </div>
  );
}