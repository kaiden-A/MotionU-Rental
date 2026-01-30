import axios from "axios";
import '../config/dotenv.js'

export default async function handler(req , res){
    
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5050';

    try{


        const backendRes = await axios.post(`${backendUrl}/api/login` , req.body);
        const token = backendRes.data.token;

        res.setHeader(
            "Set-Cookie",
            `jwt=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Lax`
        );

        res.status(200).json({ success : true ,  message: "Logged in" });

    }catch(err){
        console.error(err.respones?.data || err.message);
        return res.status(500).json({success : false , message : 'Server Error'});
    }
}