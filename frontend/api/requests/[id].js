import axios from "axios";


export default async function handler(req , res){


    const backendUrl = process.env.BACKEND_URL;
    const {id} = req.query;

    try{

        if(req.method === "GET"){
            const backendRes = await axios.get(`${backendUrl}/api/requests/${id}` , {withCredentials : true});
            res.status(200).json({success : true , message :  backendRes.data.message , request :  backendRes.data.request});
        }
        
        if(req.method === "PUT"){
            const backendRes = await axios.put(`${backendUrl}/api/request/${id}` , req.body , {withCredentials : true});
            res.status(204).json({success : true , message : backendRes.data.message})
        }

    }catch(err){
        console.error(err.response.data || err.message);
    }

}