import React from 'react'
import "./styles/NavBar.css"
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
     <header>
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="top-bar-text">Free shipping on orders over $50</div>
                    <div className="top-bar-links">
                        <a href="#">Help</a>
                        <a href="#">Contact</a>
                        <a href="#">Track Order</a>
                    </div>
                </div>
            </div>

            <div className="main-header">
                <div className="container header-content">
                    <Link to="/" >
                        <div className="logo">Shop<span>Now</span></div>
                    </Link>

                    <div className="search-bar">
                        <input type="text" placeholder="Search for products..." />
                        <button><i className="fas fa-search"></i></button>
                    </div>

                    <div className="header-actions">
                        <Link to="/login" >
                        <div className="header-action">
                            <i className="far fa-user"></i>
                            <span>Account</span>
                        </div>
                        </Link>
                        
                        <div className="header-action">
                            <i className="far fa-heart"></i>
                            <span>Wishlist</span>
                        </div>
                        <div className="header-action cart-icon">
                            <i className="fas fa-shopping-cart"></i>
                            <span>Cart</span>
                            <div className="cart-count">3</div>
                        </div>
                    </div>
                </div>
            </div>

            <nav>
                <div className="container">
                    <ul className="nav-links">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Shop <i className="fas fa-chevron-down"
                                    style={{ fontSize: '0.8rem', marginLeft: '5px' }}></i></a>
                            <div className="dropdown mega-dropdown">
                                <div className="mega-dropdown-column">
                                    <h4>Shop by Category</h4>
                                    <ul>
                                        <li><a href="#">All Products</a></li>
                                        <li><a href="#">New Arrivals</a></li>
                                        <li><a href="#">Best Sellers</a></li>
                                        <li><a href="#">Sale Items</a></li>
                                        <li><a href="#">Gift Cards</a></li>
                                    </ul>
                                </div>
                                <div className="mega-dropdown-column">
                                    <h4>Shop by Price</h4>
                                    <ul>
                                        <li><a href="#">Under $25</a></li>
                                        <li><a href="#">$25 - $50</a></li>
                                        <li><a href="#">$50 - $100</a></li>
                                        <li><a href="#">$100 - $200</a></li>
                                        <li><a href="#">Over $200</a></li>
                                    </ul>
                                </div>
                                <div className="mega-dropdown-column">
                                    <h4>Special Offers</h4>
                                    <ul>
                                        <li><a href="#">Flash Deals</a></li>
                                        <li><a href="#">Bundle Offers</a></li>
                                        <li><a href="#">Clearance</a></li>
                                        <li><a href="#">Student Discount</a></li>
                                        <li><a href="#">Members Only</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">Categories <i className="fas fa-chevron-down"
                                    style={{ fontSize: '0.8rem', marginLeft: '5px' }}></i></a>
                            <div className="dropdown">
                                <div className="dropdown-header">Product Categories</div>
                                <ul>
                                    <li><a href="#">Electronics</a></li>
                                    <li><a href="#">Fashion</a></li>
                                    <li><a href="#">Home & Garden</a></li>
                                    <li><a href="#">Beauty & Health</a></li>
                                    <li><a href="#">Sports & Outdoors</a></li>
                                    <li><a href="#">Toys & Games</a></li>
                                    <li><a href="#">Automotive</a></li>
                                    <li><a href="#">Books & Media</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">New Arrivals</a>
                            <div className="dropdown">
                                <ul>
                                    <li><a href="#">Just In</a></li>
                                    <li><a href="#">This Week</a></li>
                                    <li><a href="#">This Month</a></li>
                                    <li><a href="#">Coming Soon</a></li>
                                    <li><a href="#">Pre-Order</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Deals <i className="fas fa-chevron-down"
                                    style={{ fontSize: '0.8rem', marginLeft: '5px' }}></i></a>
                            <div className="dropdown">
                                <ul>
                                    <li><a href="#">Today's Deals</a></li>
                                    <li><a href="#">Weekly Specials</a></li>
                                    <li><a href="#">Seasonal Sales</a></li>
                                    <li><a href="#">Clearance</a></li>
                                    <li><a href="#">Bundle Offers</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Brands <i className="fas fa-chevron-down"
                                    style={{ fontSize: '0.8rem', marginLeft: '5px' }}></i></a>
                            <div className="dropdown">
                                <div className="dropdown-header">Popular Brands</div>
                                <ul>
                                    <li><a href="#">Apple</a></li>
                                    <li><a href="#">Samsung</a></li>
                                    <li><a href="#">Nike</a></li>
                                    <li><a href="#">Adidas</a></li>
                                    <li><a href="#">Sony</a></li>
                                    <li><a href="#">LG</a></li>
                                    <li><a href="#">View All Brands</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">About</a>
                            <div className="dropdown">
                                <ul>
                                    <li><a href="#">Our Story</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Sustainability</a></li>
                                    <li><a href="#">Investor Relations</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                            <div className="dropdown">
                                <ul>
                                    <li><a href="#">Customer Service</a></li>
                                    <li><a href="#">Store Locator</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Feedback</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
  )
}
