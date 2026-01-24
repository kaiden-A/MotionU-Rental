import axios from "axios";


export default async function handler(req , res) {

    const backendUrl = process.env.BACKEND_URL;

    try{

        if(req.method === "GET"){
            
            const backendRes = await axios.get(`${backendUrl}/api/requests` , {withCredentials : true});
            res.status(200).json({success : true , request : backendRes.data.request});
        }

        if(req.method === 'POST'){

            const backendRes = await axios.post(`${backendUrl}/api/requests` , 
                req.body
            );

            return res.status(201).json({success : true , message : backendRes.data.message});

        }



    }catch(err){
        console.error(err.response.data || err.message);
    }
}