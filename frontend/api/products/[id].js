//import formidable from "formidable";
//import fs from "fs";
import axios from "axios";
import cookie from "cookie";
import dotenv from "dotenv";
//import FormData from "form-data";
dotenv.config();

export const config = {
    api: {
        bodyParser: false, // important for file uploads
    },
};

export default async function handler(req , res){

    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5050';
    const {id} = req.query;


    const cookies = cookie.parse(req.headers.cookie || "");
    const token = cookies.jwt;
    if (!token) {
        return res.status(401).json({ success : false ,  message: "Not logged in" });
    }

    try{

        if(req.method === "DELETE"){

            const backendRes = await axios.delete(`${backendUrl}/api/products/${id}` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });

            if(backendRes.data.success){
                return res.status(204).json({success : true , message : backendRes.data.message})
            }
        }

    }catch(err){
        console.error(err.response?.data || err.message);
    }

}