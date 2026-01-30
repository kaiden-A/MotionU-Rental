import axios from 'axios';


export const getRequests = async () => {
    const res = await axios.get('/api/requests' , {withCredentials : true});
    return res;
}

export const postProducts = async (formData) => {
    
    const res = await axios.post('/api/products' , 
        formData , 
        {withCredentials : true}
    )

    return res;
}

export const deleteProducts = async(id) => {

    const res = await axios.delete(`/api/products/${id}` , {withCredentials : true});
    return res;
}

export const getDashboardData = async () => {
    const res = await axios.get('/api/admin' , {withCredentials : true});
    return res;
}