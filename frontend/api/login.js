import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req , res){
    
    const backendUrl = process.env.BACKEND_URL;


    try{


        const backendRes = await axios.post(`${backendUrl}/api/login` , req.body , {withCredentials : true});
        const token = backendRes.token;

        res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`);

        res.status(200).json({ message: "Logged in" });

    }catch(err){
        console.error(err.respones?.data || err.message);
        return res.status(500).json({success : false , message : 'Server Error'});
    }
}