import axios from 'axios';
import cookie from 'cookie';
import "../../config/dotenv.js";

export default async function handler(req , res){

    const backendUrl = process.env.BACKEND_URL;
    const cookies = cookie.parse(req.headers.cookie || "");
    const token = cookies.jwt;

    

    try{

        if(req.method === 'GET'){

            const backendRes = await axios.get(`${backendUrl}/api/products`);
            return res.status(200).json({success : true , products : backendRes.data.products})
        }

        if(req.method === 'POST'){

            if (!token) {
                return res.status(401).json({ success : false ,  message: "Not logged in" });
            }
            
            const backendRes = await axios.post(`${backendUrl}/api/products` , 
                req.body,
                {
                    headers : {
                    Authorization : `Bearer ${token}`
                    }
                }
                
            );

            return res.status(201).json({success : true , message : backendRes.data.message});

        }


    }catch(err){
        console.error(err.response?.data || err.message);
        return res.status(500).json({success : false , message : 'Server Error'})

    }
}