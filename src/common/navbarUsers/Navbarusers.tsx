import React from "react";
import { Link } from "react-router-dom";
import "./navbarusers.css";
import atraswhite from "../../assets/atraswhite.svg";
import homewhitesvg from "../../assets/homewhitesvg.svg";

export default function Navbarusers() {
  return (
    <div className="contenedorNavbar" style={{ backgroundColor: 'black' }}>
      {/* Capa de fondo desenfocado */}
      <div className="fondoDesenfocado"></div>

      <div className="contexto">
        <button className="botonNavbar" onClick={() => window.history.back()}>
          <img src={atraswhite} className="icons" />
        </button>
        <Link to="/home">
          <button className="botonNavbar">
            <img src={homewhitesvg} className="icons" />
          </button>
        </Link>
      </div>
    </div>
  );
}
