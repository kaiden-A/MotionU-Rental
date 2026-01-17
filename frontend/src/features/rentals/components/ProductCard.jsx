

function ProductsCard({image , name , desc , rate}){

    return(
        <>
            <div className="product-card">
                <div className="product-image">
                    <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Professional DSLR Camera"/>
                </div>
                <div className="product-info">
                    <h3 className="product-title">Professional DSLR Camera</h3>
                    <p className="product-description">High-quality camera perfect for events and professional photography. Includes 2 lenses and carrying case.</p>
                    <div className="product-footer">
                        <div className="product-price">$45<span>/day</span></div>
                        <button className="add-to-cart">
                            <i className="fas fa-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCard;