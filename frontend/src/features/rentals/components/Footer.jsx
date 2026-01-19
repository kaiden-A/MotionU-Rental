

function Footer(){

    return(
        <footer id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Rent</h3>
                        <p>Quality product rentals made simple. Flexible terms, no hidden fees.</p>
                    </div>
                    
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a>All Products</a></li>
                            <li><a>Your Cart</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <ul className="footer-links">
                            <li><i className="fas fa-envelope"></i> info@motionukict.com</li>
                            <li><i className="fas fa-phone"></i> (123) 456-7890</li>
                            <li><i className="fas fa-clock"></i> Mon-Fri: 9am-6pm</li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="copyright">
                        Made And Develop By Motion-U
                    </div>
                    <div className="social-links">
                        <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;