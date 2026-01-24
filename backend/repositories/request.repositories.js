import pool from "../config/database.js";

class RequestRepositories{

    async createRequest(productId , email , start , end , quantity ){

        const [result] = await pool.query(
            `
            INSERT INTO RENTAL_REQUESTS(product_id , customer_email , start_date , end_date , requested_quantity , status , created_at , updated_at)
            VALUES(? , ? , ? , ? , ? , ? , ? , ?)
            `,
            [productId , email , start , end , quantity , new Date() , new Date() ]
        );

        return result.affectedRows > 0;
    }

    async updateApproval(status , requestId ,adminId , message){

        const [result] = await pool.query(
            `
            UPDATE RENTAL_REQUESTS
            SET 
                status = ? , 
                updated_at = ? , 
                admin_id = ?,
                admin_note = ?
            WHERE request_id = ?
            `,
            [status , new Date() , adminId , message, requestId ]
        )

        return result.affectedRows > 0;
    }
    async getRequestById(id){

        const [rows] = await pool.query(
            `
            SELECT 
                r.request_id AS requestId,
                p.product_id AS productId,
                p.name,
                r.customer_email AS email,
                r.start_date AS startDate,
                r.end_date AS endDate,
                r.requested_quantity AS quantity,
                r.status
            FROM RENTAL_REQUESTS r
            JOIN PRODUCTS p ON r.product_id = p.product_id
            WHERE r.request_id = ?
            `,
            [id]
        )

        return rows[0];

    }

    async getAll(){
        
        const [rows] = await pool.query(
            `
            SELECT 
                r.request_id AS requestId,
                p.product_id,
                p.name,
                r.customer_email AS email,
                r.start_date AS startDate,
                r.end_date AS endDate,
                r.requested_quantity AS quantity,
                r.status
            FROM RENTAL_REQUESTS r
            JOIN PRODUCTS p ON r.product_id = p.product_id
            `
        );

        return rows;
    }

}

export default new RequestRepositories;