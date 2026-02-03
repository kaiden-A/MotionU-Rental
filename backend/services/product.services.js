import productRepositories from "../repositories/product.repositories.js";
import AppError from "../utils/AppError.js";

class ProductServices{

    async getAllProduct(){

        const products = await productRepositories.getAllProducts();

        if(products.length === 0){
            throw new AppError("Fail Retrieving The Products" , 400);
        }

        return products;
    }

    async getActiveProduct(){
        const products = await productRepositories.getActiveProducts();

        if(products.length === 0){
            throw new AppError("Fail Retrieving The Products" , 400);
        }

        return products;
    }
    
    async updateQuantity(productId , quantity){

        const updateProducts = await productRepositories.updateQuantity(productId , quantity);

        if(!updateProducts){
            throw new AppError('Fail Update Quantity' , 400);
        }

        return;
    }

    async softDelete(productId){
        const deleteProduct = await productRepositories.softDeleteProduct(productId);

        if(!deleteProduct){
            throw new AppError('Fail Delete The Product' , 400);
        }

        return;
    }

    async createProduct(name , description , imgLink , publicId , quantity , rate ){

        // if(!imgLink.startsWith('https://res.cloudinary.com/')){
        //     throw new AppError('This image is not from cloudinary' , 404)
        // }

        const product = productRepositories.addProduct(name , imgLink , description , publicId , quantity , rate);

        if(!product){
            throw new AppError('Fail Creating The Product' , 400);
        }

        return;

    }
}

export default new ProductServices();