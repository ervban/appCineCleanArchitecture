import React, { useEffect, useState } from "react";
import axios from "axios";
import { PeliculaCard, Movie } from "../peliculas/PeliculaCard" 
import evangelion from "@/assets/evangelion.png";
import narnia from "@/assets/narnia.jpg";
import dune from "@/assets/dune.jpg";
import hobbitjpg from "@/assets/hobbitjpg.jpg";
import lobo from "@/assets/lobo.jpg";
import "./cartelera.css";
import { getAllPeliculas } from "@/services/peliculas.service";


interface Cartelera {
    nombre: string;
    descripcion: string;
    trailer: string;
    imagen: string;
    duracion: string;
}


export default function Cartelera() {
    const [movies, setMovies] = useState<Movie[]>([]);

    const images = [evangelion, narnia, dune, hobbitjpg, lobo];
  

    useEffect(() => {
      const cargarProductos = async () => {
        const peliculasCargados = await getAllPeliculas();
        console.log(peliculasCargados); // Imprime la data por consola
        setMovies(peliculasCargados);
      };
      cargarProductos();
    }, []);
    return (
    
    <div className="peliculas">
        <h2>Peliculas En Cartelera</h2>
        <div className="container-peliculas">
          <div className="image-group">
            {movies.map((movie) => (
              <PeliculaCard key={movie.id} movie={movie}></PeliculaCard>
            ))}
          </div>
        </div>
      </div>
  )
}
