import axios from 'axios';

export const getProducts = async () => {

    const res = await axios.get('/api/products');
    return res;
}

export const createRequest = async (productId , email , start , end , quantity , amount , notes ) => {

    //console.log('send request for ' + productId)

    const res = axios.post(`/api/requests` , 
        {productId , email , start , end , quantity , amount , notes }
    );

    return res;
}