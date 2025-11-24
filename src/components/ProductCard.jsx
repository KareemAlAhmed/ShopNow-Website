import React from 'react'
import "./styles/ProductCard.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './store/slicers/userSlicer';
import { Bounce, toast } from 'react-toastify';

export default function ProductCard({isSale,isNew,product}) {
     const dispatch=useDispatch();
    const {currentUser}=useSelector(s=>s.user);
    function addItemToUserCart(){
        if(currentUser != null){
            dispatch(addItemToCart({
                 "id":product.id,
                "prodName":product?.name,
                "prodBrandName":product?.brandName,
                "prodPrice": parseFloat(product?.price),
                "prodNewPrice": product?.newPrice ? parseFloat(product?.newPrice) :product?.newPrice,
                "quantity":1,
                "prodThumbnail":product?.images_url[0],
                "prodMaxQt":product?.quantity
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
     <Link to={"/product/"+product.id} className="product-link">
        <div className="product-card">
                        <div className="product-img">
                        
                            <img src={product.images_url[0]} referrerPolicy="no-referrer" />
                            {isSale ? (<div className="product-badge">Sale</div>) : null}
                            {isNew ? (<div className="product-badge">New</div>) : null}
                            
                        </div>
                        <div className="product-content">
                            <h3 className="product-title">{product.name}</h3>
                            <div className="product-price">
                                {isSale ? (
                                    <>
                                        <span className="current-price">${product.price}</span>
                                        <span className="original-price">${product.newPrice}</span>

                                    </>
                                    
                                    ) :(
                                        <span className="current-price">${product.price}</span>

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
                                <button className="btn" onClick={()=>addItemToUserCart()}>Add to Cart</button>
                                <button className="btn btn-secondary">Buy Now</button>
                            </div>
                        </div>
                    </div>
     </Link>
  )
}
