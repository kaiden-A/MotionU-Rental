import pool from "../config/database.js";

class RequestRepositories{

    async createRequest(productId , email , start , end , quantity , notes ){

        const [result] = await pool.query(
            `
            INSERT INTO RENTAL_REQUESTS(product_id , customer_email , start_date , end_date , requested_quantity , status , request_note , created_at , updated_at)
            VALUES(? , ? , ? , ?, ? , ? , ? , ? , ?)
            `,
            [productId , email , start , end , quantity , 'PENDING' , notes ,new Date() , new Date() ]
        );

        return { affected : result.affectedRows > 0 ,  id : result.insertId};
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
                p.product_id AS productId,
                p.rate_per_day AS rate,
                p.name,
                r.request_note AS note,
                r.customer_email AS email,
                ps.amount,
                CONCAT(DATE_FORMAT(r.start_date, '%d/%m/%Y'), ' - ', DATE_FORMAT(r.end_date, '%d/%m/%Y')) AS startDate,
                DATEDIFF(r.end_date, r.start_date) AS durations,
                r.requested_quantity AS quantity,
                r.status
            FROM RENTAL_REQUESTS r
            JOIN PRODUCTS p ON r.product_id = p.product_id
            JOIN PAYMENTS ps ON r.request_id = ps.request_id;
            `
        );

        return rows;
    }

}

export default new RequestRepositories;