import React from 'react'
import "./styles/ShopByCat.css"
export default function ShopByCat() {
  return (<section className="section">
            <div className="container">
                <h2 className="section-title">Shop By Category</h2>
                <div className="categories">
                    <div className="category-card">
                        <div className="category-img">
                            <i className="fas fa-tshirt"></i>
                        </div>
                        <div className="category-content">
                            <h3>Fashion</h3>
                            <p>Latest trends for men and women</p>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-img">
                            <i className="fas fa-laptop"></i>
                        </div>
                        <div className="category-content">
                            <h3>Electronics</h3>
                            <p>Tech gadgets and accessories</p>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-img">
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="category-content">
                            <h3>Home & Garden</h3>
                            <p>Furniture and decor items</p>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-img">
                            <i className="fas fa-heartbeat"></i>
                        </div>
                        <div className="category-content">
                            <h3>Health & Beauty</h3>
                            <p>Skincare and wellness products</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
