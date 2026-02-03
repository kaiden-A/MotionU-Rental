import { useEffect, useState } from "react";
import ProductsData from "./ProductsData";
import {getProducts } from '../../rentals/api/users.js';
import { deleteProducts } from "../api/admins.js";
import AddProducts from "./AddProductsModal";
import Notifications from '../../components/Notifications';

function Products(){

    const [products , setProducts] = useState([]);
    const [openProd , setProd] = useState(false);
    const [openNoti , setOpenNoti] = useState(false);
    const [msg , setMsg] = useState("");

    useEffect(() => {

        const fetchData = async() => {
            try{

                const data = await getProducts();
                setProducts(data.data.products)

            }catch(err){
                console.error(err.response.data || err.message);
            }
        }

        fetchData();

    }, [])


    const dltProducts = async (id) => {

        try{

            const res = await deleteProducts(id);

            if(res.data.success){
                //notifications
                setMsg('successfully Delete Products')
                setOpenNoti(true);
            }

        }catch(err){
            console.error(err.response?.data || err.message);
        }

    }

    return(
        <>
            {
                openNoti && 
                <Notifications 
                    message={msg}
                    onClose={() => setOpenNoti(false)}
                    success={true}
                />
            }
            { openProd && <AddProducts onClose={() => setProd(false)}/>}
            <div className="tab-content active" id="products">
                <div className="table-card">
                    <div className="table-header">
                        <h3 className="table-title">All Products</h3>
                        <div className="table-actions">
                            <button className="btn btn-outline">
                                <i className="fas fa-filter"></i> Filter
                            </button>
                            <button className="btn btn-primary" onClick={() => setProd(true)}>
                                <i className="fas fa-plus"></i> Add Product
                            </button>
                        </div>
                    </div>
                    <div className="table-container">
                        <table id="productsTable">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>Daily Rate</th>
                                    <th>Availability</th>
                                    <th>Rental Count</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Products data */}
                                {
                                    products.length > 0 ? (
                                        products.map((p,i) => 
                                            <ProductsData
                                                key={i}
                                                name={p.name}
                                                imgLink={p.productImg}
                                                rate={p.ratePerDay}
                                                available={p.quantity}
                                                onDelete={() => dltProducts(p.productId)}
                                            />
                                        )
                                    ) : (
                                        <tr></tr>
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;