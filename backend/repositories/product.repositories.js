import pool from "../config/database.js";
class ProductRepositories {

    async getAllProducts(){

        const [rows] = await pool.query(
            `
                SELECT 
                    product_id AS productId,
                    name,
                    product_img AS productImg,
                    description,
                    quantity,
                    rate_per_day AS ratePerDay
                FROM PRODUCTS
            `,
        );

        return rows;
    }

    async getActiveProducts(){
        const [rows] = await pool.query(
            `
                SELECT 
                    product_id AS productId,
                    name,
                    product_img AS productImg,
                    description,
                    current_quantity AS quantity,
                    rate_per_day AS ratePerDay
                FROM PRODUCTS
                WHERE is_active = ?
            `,
            [true]
        );

        return rows;
    }

    async addQuantity(productId , quantity){

        const [result] = await pool.query(
            `
            UPDATE PRODUCTS
            SET quantity = ?
            WHERE product_id = ?
            `,
            [quantity , productId]
        )

        return result.affectedRows > 0;
    }

    async updateQuantity(productId , quantity){

        const [result] = await pool.query(
            `
            UPDATE PRODUCTS
            SET  current_quantity = ?, updated_at = ?
            WHERE product_id = ?
            `,
            [quantity , new Date() , productId]
        )

        return result.affectedRows > 0;

    }

    async softDeleteProduct(productId){

        const [result] = await pool.query(
            `
            UPDATE PRODUCTS
            SET is_active = ? , updated_at = ?
            WHERE product_id = ?
            `,
            [false , new Date() , productId]
        );

        return result.affectedRows > 0;
    }

    async findProductById(id){

        const [rows] = await pool.query(
            `
                SELECT 
                    product_id AS productId,
                    name,
                    product_img AS productImg,
                    description,
                    current_quantity AS currentQuantity,
                    rate_per_day AS ratePerDay
                FROM PRODUCTS
                WHERE product_id = ?
            `,
            [id]
        );

        return rows[0];

    }

    async addProduct(name , productImg , description , publicId, quantity , rate ){

        const [result] = await pool.query(
            `
            INSERT INTO PRODUCTS(name , product_img , description , public_id , quantity , current_quantity
             , rate_per_day , is_active , created_at , updated_at)
            VALUES( ? , ? , ? , ? ,  ?, ? ,  ? , ? , ? , ?)
            `,
            [name , productImg , description , publicId, quantity , quantity , rate , true, new Date() , new Date() ]
        )

        return result.affectedRows > 0;

    }

}

export default new ProductRepositories();