import authServices from "../services/auth.services.js";
import catchAsync from "../utils/catchAsync.js";
import { auth } from "../config/auth.js";


export const post_login = catchAsync( async (req , res) => {

    const {email , password} = req.body;

    const token  = await authServices.login(email , password);

    res.cookie( 'jwt' , token ,{
        httpOnly : true,
        maxAge : auth.cookieMaxAge,
        secure : process.env.NODE_ENV === 'production',
        sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'lax'
    })

    res.status(200).json({success : true , message : "Successfully Login"})

})


export const post_signup = catchAsync( async(req , res) => {

    const {name , email , password} = req.body;

    const token = await authServices.createUser(name , email , password);

    res.cookie( 'jwt' , token ,{
        httpOnly : true,
        maxAge : auth.cookieMaxAge,
        secure : process.env.NODE_ENV === 'production',
        sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'lax'
    })

    res.status(201).json({success : true , message : "Successfully Create User"})

})

