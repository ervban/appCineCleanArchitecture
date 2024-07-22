import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/cartelera';

export const getCarteleraById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/listar/${id}`);
        console.log("Cartelera obtenida:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener la cartelera:", error);
        throw error;
    }
};

export const getAllCarteleras = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/listar`);
        console.log("Todas las carteleras:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener todas las carteleras:", error);
        throw error;
    }
};

export const createCartelera = async (cartelera: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/guardar`, cartelera);
        console.log("Cartelera creada:", response.status); // HttpStatus.CREATED = 201
        return response.data;
    } catch (error) {
        console.error("Error al crear la cartelera:", error);
        throw error;
    }
};

export const updateCartelera = async (id: number, cartelera: any) => {
    try {
        const response = await axios.put(`${BASE_URL}/guardar/${id}`, cartelera);
        console.log("Cartelera actualizada:", response.status); // HttpStatus.NO_CONTENT = 204
        return response.data;
    } catch (error) {
        console.error("Error al actualizar la cartelera:", error);
        throw error;
    }
};

export const deleteCartelera = async (id: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/eliminar/${id}`);
        console.log("Cartelera eliminada:", response.status); // HttpStatus.NO_CONTENT = 204
        return response.data;
    } catch (error) {
        console.error("Error al eliminar la cartelera:", error);
        throw error;
    }
};

export const getCarteleraByHorario = async (idHorario: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/horario/${idHorario}`);
        console.log("Cartelera por horario:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener cartelera por horario:", error);
        throw error;
    }
};

export const findByIdPelicula = async (idPelicula: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/search-pelicula/${idPelicula}`);
        console.log("Cartelera por película:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al buscar cartelera por película:", error);
        throw error;
    }
};