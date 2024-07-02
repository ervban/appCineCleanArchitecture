import React from "react";
import Navbarusers from "../../common/navbarUsers/Navbarusers";
import "./registro.css";
import { Link } from "react-router-dom";
import Formulario from "../../common/Formulario/Formulario";

const camposFormulario = [
  { name: 'Nombre', type: 'text', placeholder: 'Ingresa tu nombre' },
  { name: 'Apellido', type: 'text', placeholder: 'Ingresa tu apellido' },
  { name: 'Correo', type: 'email', placeholder: 'Ingresa tu correo electrónico' },
  { name: 'Numero', type: 'text', placeholder: 'Ingresa tu número telefónico' },
  { name: 'Password', type: 'password', placeholder: 'Crea una contraseña' },
];

function Registrousuarios() {
  const manejarEnvio = (formData:any) => {
    console.log(formData); // Aquí puedes implementar la lógica de envío, como enviar los datos a un servidor
  };

  return (
    <div>
      <Navbarusers />
      <div className="login-box">
        <h2>REGISTRO DE USUARIOS</h2>
        <Formulario fields={camposFormulario} onSubmit={manejarEnvio} />
        <div className="botones">
          <Link to="/registrotarjeta">
            <button className="siguiente">Agregar</button>
          </Link>
          <Link to="/login">
            <button className="siguiente">Siguiente</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registrousuarios;