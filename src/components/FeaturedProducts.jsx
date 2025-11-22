import React from 'react'
import "./styles/FeaturedProds.css"
import ProductCard from './ProductCard';
export default function FeaturedProducts() {
  return (
     <section className="section">
            <div className="container">
                <h2 className="section-title">Featured Products</h2>
                <div className="products">
                    {/* <div className="product-card">
                        <div className="product-img">
                            <i className="fas fa-headphones"></i>
                            <div className="product-badge">Sale</div>
                        </div>
                        <div className="product-content">
                            <h3 className="product-title">Wireless Headphones</h3>
                            <div className="product-price">
                                <span className="current-price">$79.99</span>
                                <span className="original-price">$99.99</span>
                            </div>
                            <div className="product-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="product-actions">
                                <button className="btn">Add to Cart</button>
                                <button className="btn btn-secondary">Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                    <ProductCard prodName="Wireless Headphones" originalPrice={99.99} currentPrice={79.99} isSale={true} isNew={false} />
                    <ProductCard prodName="Smartphone X Pro" originalPrice={899.99} currentPrice={899.99} isSale={false} isNew={false} />
                    <ProductCard prodName="Running Shoes" originalPrice={129.99} currentPrice={129.99} isSale={false} isNew={true} />
                    <ProductCard prodName="Smart Watch" originalPrice={249.99} currentPrice={199.99} isSale={true} isNew={false} />
                    
                    {/* <div className="product-card">
                        <div className="product-img">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className="product-content">
                            <h3 className="product-title">Smartphone X Pro</h3>
                            <div className="product-price">
                                <span className="current-price">$899.99</span>
                            </div>
                            <div className="product-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <div className="product-actions">
                                <button className="btn">Add to Cart</button>
                                <button className="btn btn-secondary">Buy Now</button>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="product-card">
                        <div className="product-img">
                            <i className="fas fa-shoe-prints"></i>
                            <div className="product-badge">New</div>
                        </div>
                        <div className="product-content">
                            <h3 className="product-title">Running Shoes</h3>
                            <div className="product-price">
                                <span className="current-price">$129.99</span>
                            </div>
                            <div className="product-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="product-actions">
                                <button className="btn">Add to Cart</button>
                                <button className="btn btn-secondary">Buy Now</button>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="product-card">
                        <div className="product-img">
                            <i className="fas fa-watch"></i>
                        </div>
                        <div className="product-content">
                            <h3 className="product-title">Smart Watch</h3>
                            <div className="product-price">
                                <span className="current-price">$199.99</span>
                                <span className="original-price">$249.99</span>
                            </div>
                            <div className="product-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <div className="product-actions">
                                <button className="btn">Add to Cart</button>
                                <button className="btn btn-secondary">Buy Now</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
  )
}
