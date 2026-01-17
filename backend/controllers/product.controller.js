import productServices from "../services/product.services.js"
import catchAsync from "../utils/catchAsync.js"

export const get_products = catchAsync(async (req , res) => {

    const products = await productServices.getAllProduct();

    res.status(200).json({success : true , products : products})

})

export const get_active_products = catchAsync( async(req , res) => {

    const products = await productServices.getActiveProduct();
    res.status(200).json({success : true , products : products});

})

export const update_products_quantity = catchAsync( async(req , res) => {

    const productId = req.params.id;
    const {quantity} = req.body;

    await productServices.updateQuantity(productId , quantity);

    res.status(204).json({success : true , message : 'Successfully Update The Quantity'})

})

export const delete_product = catchAsync( async(req , res) => {

    const produdctId = req.params.id;

    await productServices.softDelete(produdctId);
    res.status(204).json({success : true , message : 'Successfully Soft Deleted The Product'})
})

export const post_product = catchAsync( async(req , res) => {

    const fileUri = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    const {name , description , quantity , rate} = req.body;

    await productServices.createProduct(name , fileUri , description , quantity , rate);
    res.status(201).json({success : true , message : 'Successfully Created The product'});
})