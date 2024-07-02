import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import dune from "../../assets/dune.jpg";
import evangelion from "../../assets/evangelion.png";
import hobbitjpg from "../../assets/hobbitjpg.jpg";
import lobo from "../../assets/lobo.jpg";
import narnia from "../../assets/narnia.jpg";

// Definir la interfaz para una película
interface Movie {
  id: number;
  title: string;
  description: string;
  image?: string; // La imagen es opcional porque se añadirá después
}

export default function HookPeliculas() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const images = [evangelion, narnia, dune, hobbitjpg, lobo];

  useEffect(() => {
    axios.get("http://localhost:8090/api/peliculas/listar").then((response) => {
      const updatedMovies: Movie[] = response.data.map((movie: Movie, index: number) => ({
        ...movie,
        image: images[index % images.length],
      }));
      console.log(updatedMovies);
      setMovies(updatedMovies);
    });
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

  return (
    <div>
      {/* Renderizar las películas aquí */}
    </div>
  );
}