import React, { useEffect, useState } from 'react'
import "../styles/ProductPage.css"
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProd, getProd } from '../store/slicers/productSlicer';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { addItemToCart } from '../store/slicers/userSlicer';
import { Bounce, toast } from 'react-toastify';
export default function ProductPage() {
    const {id}=useParams();
    const dispatch=useDispatch();
    const {currentProduct,relatedProds}=useSelector(s=>s.product);
    const {currentUser}=useSelector(s=>s.user);
    const [quality,setQuantity]=useState(1);

    function increaseQt(){
        if((quality+1) <= currentProduct.quantity){
            setQuantity(quality+1);
        }
    }
    function decreaseQt(){
         if((quality-1) > 0){
            setQuantity(quality-1);
        }
    }
useEffect(()=>{
    if(localStorage.getItem("currentProd") != null){
        let prod=JSON.parse(localStorage.getItem("currentProd") );
        if(prod.id != id){
            dispatch(getProd(id));
        }else{
            dispatch(getCurrentProd())
        }
    }else{
        dispatch(getProd(id))
    }

},[id])

    useEffect(()=>{
       
        
        const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabId = tab.getAttribute('data-tab');
                    
                    // Remove active class from all tabs and contents
                    tabs.forEach(t => t.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to current tab and content
                    tab.classList.add('active');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Thumbnail selection
            const thumbnails = document.querySelectorAll('.thumbnail');
            const mainImage = document.querySelector('.main-image img');
            
            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    thumbnails.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');

                    const newImg = thumb.querySelector('img').src;

                    mainImage.src=newImg;
                });
            });
            

            
 
            
    },[currentProduct]);
    function addItemToUserCart(){
        if(currentUser != null){
            dispatch(addItemToCart({
                "id":currentProduct.id,
                "prodName":currentProduct?.name,
                "prodBrandName":currentProduct?.brandName,
                "prodPrice": parseFloat(currentProduct?.price),
                "prodNewPrice": currentProduct?.newPrice ? parseFloat(currentProduct?.newPrice) :currentProduct?.newPrice,
                "quantity":quality,
                "prodThumbnail":currentProduct?.images_url[0],
                "prodMaxQt":currentProduct?.quantity
            }))
            toast.success(`Item Added To The Cart.`, {                 
                className: 'custom-success-toast',
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }else{
            toast.error(`Sign First, in Order To Add An Item To Cart.`, {   
                className: 'custom-success-toast',
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
        
    }

  return (
    <div className="product-page">
        <div className="container">
            <div className="product-container">
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={currentProduct?.images_url ? currentProduct?.images_url[0] : null} referrerPolicy="no-referrer" />

                    </div>
                    <div className="thumbnail-images">

                            <div className="thumbnail active">
                                <img src={currentProduct?.images_url ? currentProduct?.images_url[0] : null} referrerPolicy="no-referrer" />
                            </div>
                        {currentProduct?.images_url?.slice(1).map(img=>{
                            return <div className="thumbnail">
                                <img src={img} referrerPolicy="no-referrer" />
                            </div>
                        })}


                        
                    </div>
                </div>
                
               
                <div className="product-info">
                    <h1>{currentProduct?.name}</h1>
                    <div className="product-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>(128 reviews)</span>
                    </div>
                    
                    <div className="product-price">

                        {currentProduct?.newPrice ? (
                            <>
                             <span className="current-price">${currentProduct?.newPrice}</span>
                            <span className="original-price">${currentProduct?.price}</span>
                            <span className="discount-badge">20% OFF</span>
                            </>

                        ) :(
                           <span className="current-price">${currentProduct?.price}</span> 
                        ) }
                        
                    </div>
                    
                    
             

                    
                    <div className="quantity-selector">
                        <label>Quantity:</label>
                        <div className="quantity-controls">
                            <button className="quantity-btn" onClick={decreaseQt}>-</button>
                            <input type="text" className="quantity-input" value={quality} />
                            <button className="quantity-btn" onClick={increaseQt}>+</button>
                        </div>
                    </div>
                    
                    <div className="action-buttons">
                        <button className="btn" onClick={()=>addItemToUserCart()}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                        <button className="btn btn-secondary"><i className="fas fa-bolt"></i> Buy Now</button>
                    </div>
                    
                    <div className="product-meta">
                        <div><i className="fas fa-shipping-fast"></i> Free Shipping</div>
                        <div><i className="fas fa-undo"></i> 30-Day Returns</div>
                        <div><i className="fas fa-shield-alt"></i> 2-Year Warranty</div>
                    </div>
                </div>
            </div>
            
            <div className="product-tabs">
                <div className="tabs-header">
                    <div className="tab active" data-tab="description">Description</div>
                    <div className="tab" data-tab="reviews">Reviews (128)</div>
                </div>
                
                <div className="tab-content active" id="description">
                    <h3>Product Description</h3>
                    <p className="product-description">
                        {currentProduct?.description}
                    </p>
                </div>

                
                <div className="tab-content" id="reviews">
                    <h3>Customer Reviews</h3>
                    
                    <div className="review">
                        <div className="review-header">
                            <span className="reviewer">Michael Johnson</span>
                            <span className="review-date">October 15, 2023</span>
                        </div>
                        <div className="review-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>These headphones are amazing! The noise cancellation works perfectly on my daily commute. Battery life is as advertised and the sound quality is exceptional for the price.</p>
                    </div>
                    
                    <div className="review">
                        <div className="review-header">
                            <span className="reviewer">Sarah Williams</span>
                            <span className="review-date">September 28, 2023</span>
                        </div>
                        <div className="review-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>Great headphones overall. Very comfortable for long listening sessions. The only minor issue is that the touch controls can be a bit sensitive sometimes.</p>
                    </div>
                    
                    <button className="btn btn-outline">Load More Reviews</button>
                </div>
            </div>
            <div className="related-products">
                <h2 className="section-title">You May Also Like</h2>
                <div className="products-grid">

                {relatedProds?.slice(0,4).map(prod=>{
                    return <ProductCard product={prod} isSale={false} isNew={false} key={prod.id} />
                })}

               
 
                </div>
            </div>
        </div>
    </div>
  )
}
