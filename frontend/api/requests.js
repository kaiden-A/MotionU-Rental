import axios from "axios";

export default async function handler(req , res) {
    
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5050';

    try{

        if(req.method === 'POST'){

            const backendRes = await axios.post(`${backendUrl}/api/requests` , 
                req.body
            );

            return res.status(201).json({success : true , message : backendRes.data.message});

        }

    }catch(err){
        console.error(err.responses.data || err.message);
        return res.status(500).json({success : false , message : 'Server Error'});
    }
}