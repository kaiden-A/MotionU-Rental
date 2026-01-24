import axios from "axios";

export const login  = async (email , password) => {

    const res = axios.post('/api/login', {email , password} , {withCredentials : true});
    return res;
}