import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js';
import authServices from '../services/auth.services.js';


export default async function requireAuth(req , res , next){

    const token = req.cookies.jwt;

    try{

        const decodedToken = jwt.verify(token , process.env.JWT_SECRET);

        if(!decodedToken){
            return next(new AppError('Authentication token missing' , 404));
        }

        const user = await authServices.findById(decodedToken);
        req.user = user;

        next();


    }catch(err){
        return next(new AppError('Invalid or Expired Token' , 401));
    }

}