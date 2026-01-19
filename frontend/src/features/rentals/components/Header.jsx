import { useContext, useState } from "react";
import { ChooseContext } from "../../../context/ChooseContext";


function Header(){

    const {choose} = useContext(ChooseContext);
    const [values , setValues] = useState('products')

    const scroll = (value) => {
        const element = document.getElementById(value);
        if(element){
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    return(
        <header>
            <div className="container">
                <div className="header-content">
                    <a className="logo">
                        <div className="logo-icon">
                            <i className="fas fa-box"></i>
                        </div>
                        <span>Rent</span>
                    </a>
                    
                    <div className="nav-links">
                        <a  className={`nav-link ${values === 'products' ? 'active' : ''}`} onClick={() => {scroll('products') ; setValues('products')}}>Products</a>
                        <a  className={`nav-link ${values === 'carts' ? 'active' : ''}`} onClick={() => {scroll('cart') ; setValues('carts')}}>Rental Cart</a>
                        <a  className={`nav-link ${values === 'contacts' ? 'active' : ''}`} onClick={() => {scroll('contact'); setValues('contacts')}}>Contact</a>
                    </div>
                    
                    <button className="cart-btn" id="cartBtn" onClick={() => scroll('cart')}>
                        <i className="fas fa-shopping-cart"></i>
                        <span>Cart</span>
                        <div className="cart-count" id="cartCount">{choose.length}</div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;