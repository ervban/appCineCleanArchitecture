import React from 'react'
import "./navbarCompra.css"

export default function NavbarCompra() {
    return (
        <div className="contenedorNavbar">
          {/* Capa de fondo desenfocado */}
          <div className="fondoDesenfocado"></div>
    
          <div className="contexto">
            <button className="botonNavbar">
              <img src={atraswhite} className="icons" />
            </button>
            <button className="botonNavbar">
              <img src={homewhitesvg} className="icons" />
            </button>
          </div>
        </div>
      );
}
