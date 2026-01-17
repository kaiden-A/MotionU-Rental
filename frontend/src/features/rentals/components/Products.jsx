import ProductsCard from "./ProductCard";


function Products(){

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
                        <ProductsCard/>
                        <ProductsCard/>
                        <ProductsCard/>
                        <ProductsCard/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products;