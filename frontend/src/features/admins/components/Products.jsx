import { useEffect, useState } from "react";
import ProductsData from "./ProductsData";
import {getProducts} from '../../rentals/api/users';

function Products(){

    const [products , setProducts] = useState([]);

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

    useEffect(() => {
        console.log(products);
    }, [products])

    return(
        <>
            <div className="tab-content active" id="products">
                <div className="table-card">
                    <div className="table-header">
                        <h3 className="table-title">All Products</h3>
                        <div className="table-actions">
                            <button className="btn btn-outline">
                                <i className="fas fa-filter"></i> Filter
                            </button>
                            <button className="btn btn-primary" id="addProductBtn">
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