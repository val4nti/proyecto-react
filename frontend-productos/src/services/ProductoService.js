//src/services/ProductoService.js
import axios from 'axios';
//import api from './AxiosConfig';

const API_URL = 'http://3.88.26.230:3000/productos';


class ProductoService {
    
    getAllProductos() {
        return axios.get(API_URL);
    }

    createProducto(producto) {
        return axios.post(API_URL, producto);
    }

    getProductoById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    updateProducto(id, producto) {
        return axios.put(`${API_URL}/${id}`, producto);
    }

    deleteProducto(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new ProductoService();