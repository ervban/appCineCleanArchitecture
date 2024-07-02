import React from "react";
import "./navbar.css";
import logo from "../../assets/logoCine.png";
import usuario from "../../assets/usuario.svg";
import phone from "../../assets/phone.svg";

function Navbar() {
return (
    <div>
        <nav>
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="buttons">
                <button>
                    <img src={usuario} alt="Usuario" className="icons" />
                </button>
                <button>
                    <img src={phone} alt="Contactar" className="icons"/>
                </button>
            </div>
            <div className="numbered-buttons">
                <button className="btn">Peliculas</button>
                <button className="btn">Sedes</button>
                <button className="btn">Sobre Nosotros</button>
                <button className="btn">Dulcería</button>
            </div>
        </nav>
    </div>
);
}

export default Navbar;
