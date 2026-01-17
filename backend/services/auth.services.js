import adminRepositories from "../repositories/admin.repositories.js";
import bcrypt from 'bcrypt';
import { auth } from "../config/auth.js";
import AppError from "../utils/AppError.js";
import jwt from 'jsonwebtoken';
class AuthServices{


    async createUser(name , email , password){

        const hashPassword = await this.#hashedPassword(password);
        const user = adminRepositories.createUser(name , email , hashPassword);

        if(!user){
            throw new AppError('Fail Creating User' , 400);
        }

        
        const token = this.#createToken(user);

        return token;

    }

    async login(email , password){

        const currUser = await adminRepositories.findByEmail(email);
        
        if(!currUser){
            throw new AppError('Invalid Credentials' , 404);
        }

        const correct = await this.#comparePassword(password , currUser.password);

        if(!correct){
            throw new AppError('Invalid Credentials' , 404);
        }

        const token = this.#createToken(currUser.id);

        return  token;
    }

    async findById(id){

        const user = await adminRepositories.findById(id);

        if(!user){
            throw new AppError('User Doesnt Exist' , 404);
        }

        return user;
    }

    async #hashedPassword(pasword){
    
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(pasword , salt);
    
        return hashPass;
    }

    async #comparePassword(password , hashPass){
    
        return await bcrypt.compare(password , hashPass)
        
    }

    #createToken(id){
        return jwt.sign({id : id} , auth.jwtSecret , {expiresIn : auth.jwtExpiresIn})
    }
    
}

export default new AuthServices;