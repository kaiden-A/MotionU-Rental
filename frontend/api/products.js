import axios from 'axios';

export default async function handler(req , res){

    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5050';

    try{

        if(req.method === 'GET'){
            const backendRes = await axios.get(`${backendUrl}/api/products`);
            return res.status(200).json({success : true , products : backendRes.data.products})
        }

        if(req.method === 'POST'){
            const backendRes = await axios.post(`${backendUrl}/api/products` , 
                req.body,
                {withCredentials : true}
            );

            return res.status(201).json({sucess : true , message : backendRes.data.message});

        }


    }catch(err){
        console.error(err.response?.data || err.message);
        return res.status(500).json({success : false , message : 'Server Error'})

    }
}