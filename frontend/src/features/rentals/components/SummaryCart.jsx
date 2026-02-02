import { useContext } from "react";
import { ChooseContext } from "../../../context/ChooseContext";

function SummaryCart({days}){

    const {choose} = useContext(ChooseContext);


    const totalToPay = choose.reduce((total, item) => {
        return total + Number(item.ratePerDay) * item.quantity;
    }, 0);

    return(
        <>
            <div className="cart-summary" id="cartSummary" style={{display: "block"}}>
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span id="subtotal">{`RM ${totalToPay.toFixed(2)}`}</span>
                </div>
                <div className="summary-row summary-total">
                    <span>Total</span>
                    <span id="total">{`RM ${totalToPay.toFixed(2) * days}`}</span>
                </div>
            </div>
        </>
    )
}

export default SummaryCart;