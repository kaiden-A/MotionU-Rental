import pool from "../config/database.js";

class PaymentRepositories{


    async insertPayments({requestId , amount}){
        
        const [result] = await pool.query(
            `
            INSERT INTO PAYMENTS(request_id  , amount , created_at , updated_at)
            VALUES(? , ? , ? , ?)
            `,
            [requestId  , amount , new Date() , new Date()]
        );

        return result.affectedRows > 0;
    }

}

export default new PaymentRepositories;