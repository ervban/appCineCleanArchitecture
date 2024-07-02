import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import dune from "../../assets/dune.jpg";
import evangelion from "../../assets/evangelion.png";
import hobbitjpg from "../../assets/hobbitjpg.jpg";
import lobo from "../../assets/lobo.jpg";
import narnia from "../../assets/narnia.jpg";
import NavbarGeneral from "@/common/navbar/navBarGeneral/NavbarGeneral";
import Footer from "@/common/Footer/Footer";
import { Link } from "react-router-dom";
import Cartelera from "../cartelera/Cartelera";
import TextoHome from "./TextoHome";

export default function Home() {

  return (
    <div className="container">
      <NavbarGeneral />
      <TextoHome />
      <Cartelera />
      <Footer />
    </div>
  );
}