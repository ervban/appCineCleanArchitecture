import axios from 'axios';

const BASE_URL = 'http://localhost:9070/api/confiteria';

export const getConfiteriaById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/listar/${id}`);
        console.log("Confitería obtenida:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener la confitería por ID:", error);
        throw error;
    }
};

export const getAllConfiteria = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/listar`);
        console.log("Todas las confiterías:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener todas las confiterías:", error);
        throw error;
    }
};

export const createConfiteria = async (confiteria: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/guardar`, confiteria);
        console.log("Confitería creada:", response.status); // HttpStatus.CREATED = 201
        return response.data;
    } catch (error) {
        console.error("Error al crear la confitería:", error);
        throw error;
    }
};

export const updateConfiteria = async (id: number, confiteria: any) => {
    try {
        const response = await axios.put(`${BASE_URL}/guardar/${id}`, confiteria);
        console.log("Confitería actualizada:", response.status); // HttpStatus.NO_CONTENT = 204
        return response.data;
    } catch (error) {
        console.error("Error al actualizar la confitería:", error);
        throw error;
    }
};

export const deleteConfiteria = async (id: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/eliminar/${id}`);
        console.log("Confitería eliminada:", response.status); // HttpStatus.NO_CONTENT = 204
        return response.data;
    } catch (error) {
        console.error("Error al eliminar la confitería:", error);
        throw error;
    }
};