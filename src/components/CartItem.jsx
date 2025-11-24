import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeCartItem } from './store/slicers/userSlicer';
import { Link } from 'react-router-dom';

export default function CartItem({prod,prodIndex}) {
    const dispatch=useDispatch();
    const [quantity,setQuantity]=useState(prod?.quantity);
 function increaseQt(){
        if((quantity+1) <= prod.prodMaxQt){
            setQuantity(quantity+1);
        }
    }
    function decreaseQt(){
         if((quantity-1) > 0){
            setQuantity(quantity-1);
        }
    }
  return (
    <div className="cart-item">
                        <div className="item-image">
                            {/* <i className="fas fa-headphones"></i> */}
                            <img src={prod?.prodThumbnail} referrerPolicy="no-referrer" />

                        </div>
                        <div className="item-details">
                            <h3 className="item-name"><Link to={"/product/"+prod?.id} >{prod?.prodName}</Link></h3>
                            <div className="item-brand">{prod?.prodBrandName}</div>
                            <div className="item-price">${prod?.prodPrice?.toFixed(2)}</div>
                            <div className="item-actions">
                                <button className="action-btn">
                                    <i className="far fa-heart"></i> Move to Wishlist
                                </button>
                                <button className="action-btn remove" onClick={()=>dispatch(removeCartItem(prodIndex))}>
                                    <i className="fas fa-trash"></i> Remove
                                </button>
                            </div>
                            <div className="quantity-controls">
                                <label>Quantity:</label>
                                <button className="quantity-btn minus" onClick={()=>increaseQt()}>-</button>
                                <input type="text" className="quantity-input" value={prod?.quantity} />
                                <button className="quantity-btn plus" onClick={()=>decreaseQt()}>+</button>
                            </div>
                        </div>
                        <div className="item-total">
                            {prod?.prodNewPrice ? (<>
                                <div className="total-price">${prod?.prodNewPrice?.toFixed(2)}</div>
                            <div className="savings">You save ${parseFloat(prod?.prodPrice?.toFixed(2) - prod?.prodNewPrice?.toFixed(2))}</div>
                            </>) :(<div className="total-price">${prod?.prodPrice?.toFixed(2)}</div>)}
                            
                        </div>
                    </div>
  )
}
