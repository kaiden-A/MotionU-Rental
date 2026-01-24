import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req , res){

    const backendUrl = process.env.BACKEND_URL;
    const id = req.query;

    try{

        if(req.method === "GET"){

            const backendRes = await axios.get(`${backendUrl}/api/products/${id}`);
            

        }

    }catch(err){
        console.error(err.response.data || err.message);
    }

}