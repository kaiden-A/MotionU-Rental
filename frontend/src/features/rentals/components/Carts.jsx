import Form from "./Form";


function Carts(){

    return(
    <section id="cart">
        <div class="container">
            <div class="cart-section">
                <div class="cart-header">
                    <h2 class="cart-title">Your Rental Request</h2>
                    <p class="cart-subtitle">Review your selected items and submit your rental request</p>
                </div>
                
                <div class="cart-content">
                    <div class="cart-items" id="cartItems">
                        <div class="cart-empty" id="emptyCart">
                            <i class="fas fa-shopping-cart"></i>
                            <h3 class="mb-2">Your cart is empty</h3>
                            <p>Select products from above to start your rental</p>
                        </div>
                        {/* Load Items */}
                    </div>
                    
                    <div class="cart-summary" id="cartSummary" style={{display: "none"}}>
                        <div class="summary-row">
                            <span>Subtotal</span>
                            <span id="subtotal">$0</span>
                        </div>
                        <div class="summary-row summary-total">
                            <span>Total</span>
                            <span id="total">$0</span>
                        </div>
                    </div>
                    <Form/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Carts;