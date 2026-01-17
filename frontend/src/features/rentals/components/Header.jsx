

function Header(){

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
                        <a href="#products" className="nav-link active">Products</a>
                        <a href="#cart" className="nav-link">Rental Cart</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>
                    
                    <button className="cart-btn" id="cartBtn">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Cart</span>
                        <div className="cart-count" id="cartCount">0</div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;