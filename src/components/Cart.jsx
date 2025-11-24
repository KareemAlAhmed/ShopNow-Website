import React, { useEffect } from 'react'
import "./styles/Cart.css"
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
export default function Cart() {
    const {currentUser}=useSelector(s=>s.user);

useEffect(()=>{
     const quantityInputs = document.querySelectorAll('.quantity-input');
                const minusButtons = document.querySelectorAll('.quantity-btn.minus');
                const plusButtons = document.querySelectorAll('.quantity-btn.plus');

                minusButtons.forEach((btn, index) => {
                    btn.addEventListener('click', () => {
                        let value = parseInt(quantityInputs[index].value);
                        if (value > 1) {
                            quantityInputs[index].value = value - 1;
                            updateCartTotals();
                        }
                    });
                });

                plusButtons.forEach((btn, index) => {
                    btn.addEventListener('click', () => {
                        let value = parseInt(quantityInputs[index].value);
                        quantityInputs[index].value = value + 1;
                        updateCartTotals();
                    });
                });

                // Remove items
                const removeButtons = document.querySelectorAll('.action-btn.remove');
                removeButtons.forEach(btn => {
                    btn.addEventListener('click', function () {
                        const cartItem = this.closest('.cart-item');
                        cartItem.style.opacity = '0';
                        setTimeout(() => {
                            cartItem.remove();
                            updateCartCount();
                            updateCartTotals();
                        }, 300);
                    });
                });

                // Move to wishlist
                const wishlistButtons = document.querySelectorAll('.action-btn:not(.remove)');
                wishlistButtons.forEach(btn => {
                    btn.addEventListener('click', function () {
                        const cartItem = this.closest('.cart-item');
                        const itemName = cartItem.querySelector('.item-name').textContent;
                        alert(`"${itemName}" moved to wishlist`);
                        cartItem.style.opacity = '0';
                        setTimeout(() => {
                            cartItem.remove();
                            updateCartCount();
                            updateCartTotals();
                        }, 300);
                    });
                });

                // Clear cart
                const clearCartBtn = document.getElementById('clearCart');
                clearCartBtn.addEventListener('click', function () {
                    if (confirm('Are you sure you want to clear your cart?')) {
                        const cartItems = document.querySelectorAll('.cart-item');
                        cartItems.forEach(item => {
                            item.style.opacity = '0';
                            setTimeout(() => {
                                item.remove();
                            }, 300);
                        });
                        setTimeout(() => {
                            updateCartCount();
                            updateCartTotals();
                            showEmptyCart();
                            clearCartBtn.style.display = 'none';
                            document.querySelector('.cart-header').style.justifyContent = 'center';
                            document.querySelector('.cart-title').textContent = 'Your Cart is Empty';
                            document.querySelector('.cart-count').textContent = '0 items';
                            document.querySelector('.order-summary').style.display = 'none';
                            document.querySelector('.recently-viewed').style.marginTop = '0';
                        });
                    }
                });

                // Update cart count
                function updateCartCount() {
                    const itemCount = document.querySelectorAll('.cart-item').length;
                    document.querySelector('.cart-count').textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'items'}`;
                }

                // Update cart totals
                function updateCartTotals() {
                    // In a real application, this would calculate based on actual prices and quantities
                    console.log('Updating cart totals...');
                }

                // Show empty cart state
                function showEmptyCart() {
                    const cartItems = document.querySelector('.cart-items');
                    const emptyCartHTML = `
                    <div className="empty-cart">
                        <div className="empty-cart-icon">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <h3>Your cart is empty</h3>
                        <p>Looks like you haven't added anything to your cart yet</p>
                        <a href="shop.html" className="btn" style="margin-top: 20px; display: inline-block; width: auto;">Start Shopping</a>
                    </div>
                `;

                    setTimeout(() => {
                        cartItems.innerHTML = emptyCartHTML;
                    }, 500);
                }

                // Promo code application
                const applyPromoBtn = document.querySelector('.promo-input .btn-outline');
                const promoInput = document.querySelector('.promo-input input');

                applyPromoBtn.addEventListener('click', function () {
                    const code = promoInput.value.trim();
                    if (code) {
                        // Simulate promo code validation
                        if (code.toUpperCase() === 'SAVE10') {
                            alert('Promo code applied! You saved $10.00');
                            promoInput.value = '';
                        } else {
                            alert('Invalid promo code. Please try again.');
                        }
                    }
                });

                // Checkout button
                const checkoutBtn = document.querySelector('.checkout-btn');
                checkoutBtn.addEventListener('click', function () {
                    const itemCount = document.querySelectorAll('.cart-item').length;
                    if (itemCount > 0) {
                        window.location.href = 'checkout.html';
                    } else {
                        alert('Your cart is empty. Please add items before checking out.');
                    }
                });
},[])

  return (
       <div className="cart-page">
        <div className="container">
            <div className="page-header">
                <h1 className="page-title">Shopping Cart</h1>
                <div className="breadcrumb">
                    <Link to="/">Home</Link> {" > "}  <Link to={"/"}>Shop</Link> {" > "} Shopping Cart
                </div>
            </div>

            <div className="cart-layout">
                
                <div className="cart-items">
                    <div className="cart-header">
                        <div>
                            <h2 className="cart-title">Your Cart</h2>
                            <div className="cart-count">3 items</div>
                        </div>
                        <button className="btn-outline" id="clearCart">Clear Cart</button>
                    </div>

                    {currentUser?.cart && (currentUser.cart.map((prod,index)=>{
                        return  <CartItem prod={prod} prodIndex={index} />
                    }))}
                    {currentUser?.cart?.length == 0 && (
                        <div className="empty-cart">
                        <div className="empty-cart-icon">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <h3>Your cart is empty</h3>
                        <p>Looks like you haven't added anything to your cart yet</p>
                        <Link to={"/"} className="btn" style={{marginTop:" 20px", display: "inline-block", width: "auto"}}>Start Shopping</Link>
                    </div>
                    )}
                    {/* <CartItem prod={{
                        "prodName":"Wireless Noise-Cancelling Headphones",
                        "prodBrandName":"AudioPro • Black",
                        "prodPrice":79.99,
                        "prodNewPrice":null,
                        "quantity":1,
                        "prodThumbnail":"",
                    }} />
                    <CartItem prod={{
                        "prodName":"Smart Watch Series 5",
                        "prodBrandName":"WearTech • 42mm",
                        "prodPrice":199.99,
                        "prodNewPrice":149.99,
                        "quantity":1,
                        "prodThumbnail":"",
                    }} />
                    <CartItem prod={{
                        "prodName":"Smartphone X Pro",
                        "prodBrandName":"TechGlobal • 128GB",
                        "prodPrice":899.99,
                        "prodNewPrice":699.99,
                        "quantity":1,
                        "prodThumbnail":"",
                    }} /> */}

        
           

                </div>

               
                <div className="order-summary">
                    <h2 className="summary-title">Order Summary</h2>
                    
                    <div className="summary-row">
                        <span className="summary-label">Subtotal (3 items)</span>
                        <span className="summary-value">$1,179.97</span>
                    </div>
                    
                    <div className="summary-row">
                        <span className="summary-label">Shipping</span>
                        <span className="summary-value">Free</span>
                    </div>
                    
                    <div className="summary-row">
                        <span className="summary-label">Tax</span>
                        <span className="summary-value">$82.60</span>
                    </div>
                    
                    <div className="summary-row">
                        <span className="summary-label">Discount</span>
                        <span className="summary-value" style={{color:" #28a745;"}}>-$70.00</span>
                    </div>
                    
                    <div className="summary-divider"></div>
                    
                    <div className="summary-total">
                        <span>Total</span>
                        <span>$1,192.57</span>
                    </div>

                    <div className="promo-code">
                        <label style={{display: "block", marginBottom: "10px", fontWeight: "500"}}>Promo Code</label>
                        <div className="promo-input">
                            <input type="text" placeholder="Enter code" />
                            <button className="btn-outline">Apply</button>
                        </div>
                    </div>

                    <button className="btn checkout-btn">Proceed to Checkout</button>
                    <a href="shop.html" className="continue-shopping">Continue Shopping</a>

                    <div className="security-badges">
                        <div className="security-badge">
                            <div className="badge-icon">
                                <i className="fas fa-lock"></i>
                            </div>
                            <span>Secure</span>
                        </div>
                        <div className="security-badge">
                            <div className="badge-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <span>Protected</span>
                        </div>
                        <div className="security-badge">
                            <div className="badge-icon">
                                <i className="fas fa-truck"></i>
                            </div>
                            <span>Fast Delivery</span>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="recently-viewed">
                <h2 className="section-title">Recently Viewed</h2>
                <div className="products-grid">
                    <div className="product-card">
                        <div className="product-img">
                            <i className="fas fa-laptop"></i>
                        </div>
                        <h3 className="product-name">Gaming Laptop</h3>
                        <div className="product-price">$1,299.99</div>
                        <button className="btn">Add to Cart</button>
                    </div>
                    
                    <div className="product-card">
                        <div className="product-img">
                            <i className="fas fa-camera"></i>
                        </div>
                        <h3 className="product-name">DSLR Camera</h3>
                        <div className="product-price">$599.99</div>
                        <button className="btn">Add to Cart</button>
                    </div>
                    
                    <div className="product-card">
                        <div className="product-img">
                            <i className="fas fa-tablet-alt"></i>
                        </div>
                        <h3 className="product-name">Tablet Pro</h3>
                        <div className="product-price">$399.99</div>
                        <button className="btn">Add to Cart</button>
                    </div>
                    
                    <div className="product-card">
                        <div className="product-img">
                            <i className="fas fa-gamepad"></i>
                        </div>
                        <h3 className="product-name">Gaming Controller</h3>
                        <div className="product-price">$59.99</div>
                        <button className="btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
