import axios from "axios";
import cookie from 'cookie'
import '../../config/dotenv.js'

export default async function handler(req , res) {

    const backendUrl = process.env.BACKEND_URL;

    const cookies = cookie.parse(req.headers.cookie || "");
    const token = cookies.jwt;

    
    try{

        if(req.method === "GET"){

            if (!token) {
                return res.status(401).json({ success : false ,  message: "Not logged in" });
            }

            const backendRes = await axios.get(`${backendUrl}/api/requests` , {withCredentials : true});
            res.status(200).json({success : true , requests : backendRes.data.requests});
        }

        if(req.method === 'POST'){

            const backendRes = await axios.post(`${backendUrl}/api/requests` , 
                req.body
            );

            return res.status(201).json({success : true , message : backendRes.data.message});

        }



    }catch(err){
        console.error(err.response?.data || err.message);
    }
}