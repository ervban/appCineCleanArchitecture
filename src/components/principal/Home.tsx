import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarGeneral from "@/common/navbar/navBarGeneral/NavbarGeneral";
import Footer from "@/common/Footer/Footer";
import { Link } from "react-router-dom";
import Cartelera from "../cartelera/Cartelera";
import TextoHome from "./TextoHome";

export default function Home() {

  return (
    <div >
      <NavbarGeneral />
      <TextoHome />
      <Cartelera />
      <Footer />
    </div>
  );
}