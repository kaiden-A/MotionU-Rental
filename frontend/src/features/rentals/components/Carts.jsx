import { useContext } from "react";
import Form from "./Form";
import SummaryCart from "./SummaryCart";
import { ChooseContext } from "../../../context/ChooseContext";
import ProductSummary from "./ProductSummary";
import { useState } from "react";


function Carts(){

    const { choose, setChoose } = useContext(ChooseContext);
    const [days , setDays] = useState(1);


    const addChoose = (item) => {
        setChoose(prev =>
            prev.map(c =>
            c.productId === item.productId
                ? { ...c, quantity: c.quantity + 1 }
                : c
            )
        );
    };

    const subStractChoose = (item) => {
        setChoose(prev =>
            prev
            .map(c =>
                c.productId === item.productId
                ? { ...c, quantity: c.quantity - 1 }
                : c
            )
            .filter(c => c.quantity > 0)
        );
    };

    const removeChoose = (item) => {
        setChoose(prev =>
            prev.filter(c => c.productId !== item.productId)
        );
    };
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
                            <div className="cart-empty" style={{display : choose.length === 0 ? 'block' : 'none'}}>
                                <i className="fas fa-shopping-cart"></i>
                                <h3 className="mb-2">Your cart is empty</h3>
                                <p>Select products from above to start your rental</p>
                            </div>
                            {/* Load Items */}
                            {choose.map((c) => 
                                <ProductSummary
                                    key={c.productId}
                                    image={c.productImg}
                                    name={c.name}
                                    quantity={c.quantity}
                                    rate={c.ratePerDay}
                                    onAdd={() => addChoose(c)}
                                    onSubstract={() => subStractChoose(c)}
                                    onDelete={() => removeChoose(c)}
                                />
                            )}
                        </div>
                        { choose.length > 0 && <SummaryCart days={days}/>}
                        {choose.length > 0 && <Form setDays={setDays} days={days}/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carts;