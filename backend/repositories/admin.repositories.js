import pool from "../config/database.js";

class AdminRepositories{

    async createUser(name , email , hashPassword){

        const [result] = await pool.query(
            `INSERT INTO ADMINS(name , email , password_hash , created_at)
            VALUES(? , ? , ? , ?)
            `,
            [name , email , hashPassword , new Date()]
        );

        return result.insertId;
    }

    async getDashboardData(){

        const [rows] = await pool.query(
            `
            SELECT
                COUNT(*) AS totalRequest,
                SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END)  AS totalPending,
                SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) AS totalApproved
            FROM RENTAL_REQUESTS
            `
        )

        return rows[0];
    }

    async findByEmail(email){

        const [rows] = await pool.query(
            `
            SELECT 
                admin_id AS id,
                name,
                email,
                password_hash AS password
            FROM ADMINS 
            WHERE email = ?
            `,
            [email]
        );

        return rows[0];

    }

    async findById(id){

        const [rows] = await pool.query(
            `SELECT 
                admin_id AS id ,
                name,
                email
            FROM ADMINS
            WHERE admin_id = ? `,
            [id]
        );

    
        return rows[0];

    }


}

export default new AdminRepositories;