import axios from 'axios';

const BASE_URL = 'http://localhost:8090/api/peliculas';

export const getPeliculaById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/listar/${id}`);
        console.log("Pelicula obtenida:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener la película:", error);
        throw error;
    }
};

export const getAllPeliculas = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/listar`);
     
        return response.data;
    } catch (error) {
        console.error("Error al obtener todas las películas:", error);
        throw error;
    }
};

export const createPelicula = async (pelicula:any) => {
    try {
        const response = await axios.post(`${BASE_URL}/guardar`, pelicula);
        console.log("Pelicula creada:", response.status); // HttpStatus.CREATED = 201
        return response.data;
    } catch (error) {
        console.error("Error al crear la película:", error);
        throw error;
    }
};

export const updatePelicula = async (id: number, pelicula:any) => {
    try {
        const response = await axios.put(`${BASE_URL}/guardar/${id}`, pelicula);
        console.log("Pelicula actualizada:", response.status); // HttpStatus.NO_CONTENT = 204
        return response.data;
    } catch (error) {
        console.error("Error al actualizar la película:", error);
        throw error;
    }
};

export const deletePelicula = async (id: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/eliminar/${id}`);
        console.log("Pelicula eliminada:", response.status); // HttpStatus.NO_CONTENT = 204
        return response.data;
    } catch (error) {
        console.error("Error al eliminar la película:", error);
        throw error;
    }
};

export const getPeliculasByCategoria = async (idCategoria: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/categoria/${idCategoria}`);
        console.log("Películas por categoría:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener películas por categoría:", error);
        throw error;
    }
};

export const findCarteleraByPelicula = async (idPelicula: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/search-cartelera/${idPelicula}`);
        console.log("Cartelera por película:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al buscar cartelera por película:", error);
        throw error;
    }
};