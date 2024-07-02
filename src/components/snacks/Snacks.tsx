import React, { useEffect, useState } from "react";
import NavbarGeneral from "@/common/navbar/navBarGeneral/NavbarGeneral";
import Footer from "../../common/Footer/Footer";
import "./snacks.css";
import CartSnack from "./CartSnack";
import { getAllConfiteria } from "../../services/snack.service";

export default function Snacks() {
  const [snacks, setSnacks] = useState<any[]>([]);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const data = await getAllConfiteria();
        setSnacks(data);
      } catch (error) {
        console.error("Error al obtener las confiterías:", error);
      }
    };
    fetchSnacks();
  }, []);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <NavbarGeneral />
      <div className="snacks-container">
        {snacks.length > 0 ? (
          snacks.map((snack) => <CartSnack key={snack.id} snack={snack} />)
        ) : (
          <p>Cargando snacks...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}