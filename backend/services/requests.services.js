import requestRepositories from "../repositories/request.repositories.js";
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

        const postRequest = await requestRepositories.createRequest(productId , email , start , end , quantity);

        if(!postRequest){
            throw new AppError('Fail Creating The Request' , 401);
        }

        return;

    }

    async updateApproval(status , requestId , adminId , message){

        const updApprove = await requestRepositories.updateApproval(status , requestId , adminId , message);

        if(!updApprove){
            throw new AppError('Fail Updating Approval' , 401);
        }

        const request = await requestRepositories.getRequestById(requestId);
        const send = await sendEmail({
            to : request.email,
            subject : `Rental Services Request for ${request.name}`,
            html : `<p>${message}</p>`
        })

        if(!send){
            throw new AppError('Fail Sending Email' , 401);
        }

        return;

    }


}

export default new RequestServices;