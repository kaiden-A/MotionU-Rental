import requestRepositories from "../repositories/request.repositories.js";
import productRepositories from "../repositories/product.repositories.js";
import AppError from "../utils/AppError.js";
import sendEmail from '../utils/sendEmail.js';

class RequestServices{

    async getAllRequest(){

        const request = await requestRepositories.getAll();
        if(request.length === 0){
            throw new AppError('Fail Retrieving Request' , 401);
        }

        return request;
    }

    async createRequest(productId , email , start , end , quantity ){

        const product = await productRepositories.findProductById(productId);

        if(quantity > product.quantity){
            throw new AppError(`${product.name} max rent quantity is ${product.quantity}` , 401);
        }
        
        const postRequest = await requestRepositories.createRequest(productId , email , start , end , quantity);

        if(!postRequest){
            throw new AppError('Fail Creating The Request' , 401);
        }

        return;

    }

    async getOneRequest(id){

        const request = await requestRepositories.getRequestById(id);
        const product = await productRepositories.findProductById(request.productId);

        if(request.quantity >= product.currentQuantity){
            return {message : "Not Enough Stock Please Reject This Request" , request: request}
        }

        return {request: request , message : "Save to approve"};

    }

    async updateApproval(status , requestId , adminId , message){

        const updApprove = await requestRepositories.updateApproval(status , requestId , adminId , message);

        if(!updApprove){
            throw new AppError('Fail Updating Approval' , 401);
        }

        const request = await requestRepositories.getRequestById(requestId);

        if(status === 'APPROVE'){
            const updQuantity = await productRepositories.updateQuantity(request.productId , request.quantity);

            if(!updQuantity){
                throw new AppError('Fail Updating The Product Quantity' , 401);
            }
        }
        
        const send = await sendEmail({
            to : request.email,
            subject : `Rental Services Request for ${request.name} are ${status}`,
            html : `<p>${message}</p>`
        })

        if(!send){
            throw new AppError('Fail Sending Email' , 401);
        }

        return;

    }


}

export default new RequestServices;