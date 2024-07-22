import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/ventas';

export const guardarVenta = async (venta: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/guardar`, venta, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Venta guardada:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al guardar la venta:', error);
        throw error;
    }
};

export const generarPago = async (descripcion: string, monto: number, moneda: string) => {
    const payload = {
        description: descripcion,
        amount: monto,
        currency: moneda
    };
    try {
        const response = await axios.post(`${BASE_URL}/paymentintent`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Pago generado:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al generar el pago:', error);
        throw error;
    }
};

export const confirmarPago = async (id: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/confirm/${id}`, null, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Pago confirmado:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al confirmar el pago:', error);
        throw error;
    }
};
