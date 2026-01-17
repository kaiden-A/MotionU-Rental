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
            FROM ADMIN
            WHERE admin_id = ? `,
            [id]
        );

        return rows[0];

    }


}

export default new AdminRepositories;