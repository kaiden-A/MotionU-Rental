import adminServices from "../services/admin.services.js";
import catchAsync from "../utils/catchAsync.js";


export const get_dashboard = catchAsync(async(req , res) => {

    const data = await adminServices.getDashboardData();
    return res.status(200).json({success : true , data : data});

})