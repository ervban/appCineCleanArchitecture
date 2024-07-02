import React from 'react'
import { Link } from 'react-router-dom'
import logoCine from '../../../assets/logoCine.png'
import usuario from '../../../assets/usuario.svg'
import phone from '../../../assets/phone.svg'
import './navbarStyle.css'

export default function NavbarGeneral() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/home">
            <img src={logoCine} />
          </Link>
        </div>
        <div className="buttons">
          <Link to="/login">
            <button>
              <img src={usuario} alt="Usuario" className="icons" />
            </button>
          </Link>
          <button>
            <img src={phone} alt="Contactar" className="icons" />
          </button>
        </div>
        <div className="numbered-buttons">
          <Link to="/peliculas">
            <button className="btn">Peliculas</button>
          </Link>
          <Link to="/sedes">
            <button className="btn">Sedes</button>
          </Link>
          <Link to="/nosotros">
            <button className="btn">Sobre Nosotros</button>
          </Link>
          <Link to="/snacks">
            <button className="btn">Dulcería</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
