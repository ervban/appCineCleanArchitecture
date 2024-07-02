import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarGeneral from "@/common/navbar/navBarGeneral/NavbarGeneral";
import Footer from "@/common/Footer/Footer";
import { PeliculaCard, Movie } from "./PeliculaCard"; 
import evangelion from "@/assets/evangelion.png";
import narnia from "@/assets/narnia.jpg";
import dune from "@/assets/dune.jpg";
import hobbitjpg from "@/assets/hobbitjpg.jpg";
import lobo from "@/assets/lobo.jpg";
import Cartelera from "../cartelera/Cartelera";


export default function Peliculas() {

  return (
    <div>
      <NavbarGeneral />
      <Cartelera  />
      <Footer />
    </div>
  );
}