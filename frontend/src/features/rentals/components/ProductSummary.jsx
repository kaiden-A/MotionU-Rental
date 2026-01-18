

function ProductSummary({image , name , rate , quantity}){

    return(
        <>
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src={image} alt={name}/>
                </div>
                <div className="cart-item-details">
                    <div className="cart-item-name">{name}</div>
                    <div className="cart-item-price">{`RM ${rate}/day`}</div>
                </div>
                <div className="cart-item-actions">
                    <div className="quantity-selector">
                        <button className="quantity-btn minus">
                            <i className="fas fa-minus"></i>
                        </button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantity-btn plus">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    <button className="remove-item">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductSummary;


