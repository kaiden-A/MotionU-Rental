import axios from 'axios';

export const getProducts = async () => {

    const responses = await axios.get(`${process.meta.env.VITE_BACKEND_URL}/api/products`);
    return responses;
}

export const createRequest = async (productId , email , start , end , quantity ) => {

    const res = axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products` , 
        {productId , email , start , end , quantity }
    );

    return res;
}