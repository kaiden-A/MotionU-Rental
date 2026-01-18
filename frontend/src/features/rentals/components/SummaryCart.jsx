
function SummaryCart(){

    return(
        <>
            <div className="cart-summary" id="cartSummary" style={{display: "block"}}>
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span id="subtotal">$0</span>
                </div>
                <div className="summary-row summary-total">
                    <span>Total</span>
                    <span id="total">$0</span>
                </div>
            </div>
        </>
    )
}

export default SummaryCart;