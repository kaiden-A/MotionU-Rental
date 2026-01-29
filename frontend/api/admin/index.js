import '../../config/dotenv.js'
import axios from 'axios'

export default async function handler(req , res){

    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5050'

    try{

        if(req.method === "GET"){
            const backendRes = await axios.get(`${backendUrl}/api/admin/dashboard` , {withCredentials : true});
            return res.status(200).json({success : true , data : backendRes.data.data})
        }

    }catch(err){
        console.error(err.response?.data || err.message);
    }
}