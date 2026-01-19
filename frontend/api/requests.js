import axios from "axios";

export default async function handler(req , res) {
    
    const backendUrl = process.env.BACKEND_URL;

    try{

        if(req.method === 'POST'){

            const backendRes = await axios.post(`${backendUrl}/api/requests` , 
                req.body
            );

            return res.status(201).json({success : true , message : backendRes.data.message});

        }

    }catch(err){


        if(err.response.status){
            return res.status(err.response.status).json({success : false , message : err.response.data?.message || 'Backend Error'})
        }

        console.error(err.responses.data || err.message);
        return res.status(500).json({success : false , message : 'Server Error'});
    }
}