import React from "react";
import "./sedes.css";
import NavbarGeneral from "@/common/navbar/navBarGeneral/NavbarGeneral";
import Footer from "@/common/Footer/Footer";
import Megaplaza from "../../assets/megaplaza.jpg";
import Plazadelsol from "../../assets/plazadelsol.jpg";
import megap from "../../assets/megap.jpg";


export default function Sedes() {
  return (
    <div>
      <NavbarGeneral />
      <div className="card-container">
        <div className="card">
          <img src={megap} alt="Imagen 1" />
          <p>Somos un cine ubicados en el establecimiento centro comercial Mega Plaza Ica</p>
        </div>
        <div className="card">
          <img src={Plazadelsol} alt="Imagen 2" />
          <p>Somos un cine ubicados en el establecimiento centro comercial Plaza del Sol Ica</p>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}
