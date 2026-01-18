import axios from 'axios';

export const getProducts = async () => {

    const res = await axios.get('/api/products');
    return res;
}

export const createRequest = async (productId , email , start , end , quantity ) => {

    const res = axios.post(`/api/products` , 
        {productId , email , start , end , quantity }
    );

    return res;
}