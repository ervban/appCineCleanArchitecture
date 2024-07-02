import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="contenedor-general">
      <div className="content-wrapper">
          <div className="footer-primary">
            <div className="footer-primary--section">
              <h3>Información</h3>
              <ul>
                <li>Acerca de nosotros</li>
                <li>Términos y condiciones</li>
                <li>Política de privacidad</li>
              </ul>
            </div>
            <div className="footer-primary--section">
              <h3>Contáctanos</h3>
              <ul>
                <li>Correo electrónico: info@cineplanet.com</li>
                <li>Teléfono: +1 123 456 7890</li>
                <li>Dirección: Av. Ejemplo 123, Ciudad</li>
              </ul>
            </div>
            <div className="footer-primary--section">
              <h3>Síguenos</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
}
