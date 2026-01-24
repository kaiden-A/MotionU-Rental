import { useState } from "react";
import { login } from "./api/login";
import {useNavigate} from 'react-router-dom'

function Login(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate();

    const sendForm = async () => {
        

        try{

            const res = await login(email , password);

            if(res.data.success){
                navigate('/admin');
            }

        }catch(err){
            console.error(err.response?.data || err.message);
            
        }

    }

    return(
        <>

        </>
    )
}

export default Login;