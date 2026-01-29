import axios from 'axios';


export const getRequests = async () => {
    const res = await axios.get('/api/requests' , {withCredentials : true});
    return res;
}

export const getDashboardData = async () => {
    const res = await axios.get('/api/admin' , {withCredentials : true});
    return res;
}