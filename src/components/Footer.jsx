import React from 'react'
import "./styles/Footer.css"
export default function Footer() {
  return (
    <>
        <section className="newsletter">
            <div className="container newsletter-content">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Get the latest updates on new products and upcoming sales</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>


        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>ShopNow</h3>
                        <p>Your one-stop destination for all your shopping needs. Quality products at affordable prices.
                        </p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Customer Service</h3>
                        <ul className="footer-links">
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Return Policy</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Track Order</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <ul className="footer-links">
                            <li><i className="fas fa-map-marker-alt"></i> 123 Commerce St, City, State 12345</li>
                            <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                            <li><i className="fas fa-envelope"></i> support@shopnow.com</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2023 ShopNow. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}
