import { useContext } from "react";
import Form from "./Form";
import SummaryCart from "./SummaryCart";
import { ChooseContext } from "../../../context/ChooseContext";
import ProductSummary from "./ProductSummary";


function Carts(){

    const {choose} = useContext(ChooseContext);

    return(
        <section id="cart">
            <div className="container">
                <div className="cart-section">
                    <div className="cart-header">
                        <h2 className="cart-title">Your Rental Request</h2>
                        <p className="cart-subtitle">Review your selected items and submit your rental request</p>
                    </div>
                    
                    <div className="cart-content">
                        <div className="cart-items" id="cartItems">
                            <div className="cart-empty" style={{display : choose.length > 0 ? 'none' : 'display'}}>
                                <i className="fas fa-shopping-cart"></i>
                                <h3 className="mb-2">Your cart is empty</h3>
                                <p>Select products from above to start your rental</p>
                            </div>
                            {/* Load Items */}
                            {choose.map((c , i) => 
                                <ProductSummary
                                    key={i}
                                    image={c.productImg}
                                    name={c.name}
                                    quantity={c.quantity}
                                    rate={c.ratePerDay}
                                />
                            )}
                        </div>
                        { choose.length > 0 && <SummaryCart/>}
                        {choose.length > 0 && <Form/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carts;