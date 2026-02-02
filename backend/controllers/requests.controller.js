import catchAsync from "../utils/catchAsync.js";
import requestsServices from "../services/requests.services.js";

export const post_request = catchAsync( async(req , res) => {

    const {productId , email , start , end , quantity , notes} = req.body;

    await requestsServices.createRequest(productId , email , start , end , quantity , notes);

    res.status(201).json({success : true , message : 'Successfully Create Request'});

})

export const update_request = catchAsync( async(req , res) => {

    const admin = req.user;

    const requestId = req.params.id;
    const {status , message} = req.body;

    await requestsServices.updateApproval(status , requestId , admin.id , message);

    res.status(204).json({success : true , message : 'Successfully Update Request'});

})

export const get_request = catchAsync( async(req , res) => {

    const requests = await requestsServices.getAllRequest();
    res.status(200).json({success : true , requests : requests});

})

export const get_one_request = catchAsync( async(req , res) => {

    const request = await requestsServices.getOneRequest(req.params.id);
    res.status(200).json({success : true , message : request.message , request : request.request});

})