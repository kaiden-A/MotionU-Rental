import adminRepositories from "../repositories/admin.repositories.js";
import AppError from "../utils/AppError.js";
class AdminServices{

    async getDashboardData(){
        const dashboardData = await adminRepositories.getDashboardData();

        if(dashboardData.length === 0){
            throw new AppError('Error Get Dashboard Data' , 404);
        }

        return dashboardData;
    }

}

export default new AdminServices;