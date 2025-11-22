import React from 'react'
import "./styles/ProductCard.css"

export default function ProductCard({prodName,originalPrice,currentPrice,isSale,isNew}) {
  return (
     <div className="product-card">
                        <div className="product-img">
                            <i className="fas fa-headphones"></i>
                            {isSale ? (<div className="product-badge">Sale</div>) : null}
                            {isNew ? (<div className="product-badge">New</div>) : null}
                            
                        </div>
                        <div className="product-content">
                            <h3 className="product-title">{prodName}</h3>
                            <div className="product-price">
                                {isSale ? (
                                    <>
                                        <span className="current-price">${currentPrice}</span>
                                        <span className="original-price">${originalPrice}</span>

                                    </>
                                    
                                    ) :(
                                        <span className="current-price">${currentPrice}</span>

                                    )}
                                
                                
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
                    </div>
  )
}
