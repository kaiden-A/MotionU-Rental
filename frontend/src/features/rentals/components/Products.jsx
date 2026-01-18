import { useContext, useEffect, useState } from "react";
import ProductsCard from "./ProductCard";
import { getProducts } from "../api/users";

import { ChooseContext } from "../../../context/ChooseContext";

function Products(){

    const [products , setProducts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try{

                const res = await getProducts();
                console.log(res.data)
                setProducts(res.data.products);

            }catch(err){
                console.error(err.response.data || err.message);
            }
        }

        fetchData();
    }, []);

    const {setChoose} = useContext(ChooseContext);

    const addProduct = (product) => {
        setChoose(prev => {
            const existing = prev.find(p => p.productId === product.productId);

            if (existing) {
                return prev.map(p =>
                    p.productId === product.productId
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1 
                }
            ];
        });
    };


    return(
        <>
            <section id="products">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Available Products</h2>
                        <div className="category-filters">
                            <button className="category-btn active" data-category="all">All</button>
                            <button className="category-btn" data-category="electronics">Electronics</button>
                            <button className="category-btn" data-category="tools">Tools</button>
                            <button className="category-btn" data-category="outdoor">Outdoor</button>
                        </div>
                    </div>
                    
                    <div className="products-grid" id="productsGrid">
                        {products.map((p , i) => 
                            <ProductsCard 
                                key={i}
                                image={p.productImg}
                                name={p.name}
                                desc={p.description}
                                rate={p.ratePerDay}
                                addProducts={() => addProduct(p)}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products;