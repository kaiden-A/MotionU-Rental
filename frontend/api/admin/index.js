import '../../config/dotenv.js'
import axios from 'axios'
import cookie from "cookie";

export default async function handler(req , res){

    const backendUrl = process.env.BACKEND_URL;

    const cookies = cookie.parse(req.headers.cookie || "");
    const token = cookies.jwt;
    if (!token) {
        return res.status(401).json({ success : false ,  message: "Not logged in" });
    }

    try{

        if(req.method === "GET"){
            
            const backendRes = await axios.get(`${backendUrl}/api/admin/dashboard` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });

            return res.status(200).json({success : true , data : backendRes.data.data})
        }

    }catch(err){
        console.error(err.response?.data || err.message);
    }
}