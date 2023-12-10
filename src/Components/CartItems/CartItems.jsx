import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
// import { Link, } from 'react-router-dom'



const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItems, removeFromCart, addToCart, removeFromCartTotal } = useContext(ShopContext);




    const products = all_products.map((item) => {
        if (cartItems[item.id] > 0) {
            return <div>
                <div className="cartitems-format cartitem-format-main">
                    <div className="cart-item-img">
                        <img src={item.image} alt="" className='carticon-producticon' />
                    </div>
                    <div className='cartitems-desc'>
                        <div className="item-description">
                            <p>{item.name}</p>
                            <img className='cartitem-removeicon' src={remove_icon} onClick={() => { removeFromCartTotal(item.id) }} alt="" />
                        </div>

                        <div className="item-description">
                            <div className='quantity-btn'>
                                <button className='operator-btn' onClick={() => { removeFromCart(item.id) }}>-</button>
                                <button className='cartitems-quantity'>{cartItems[item.id]}
                                </button>
                                <button className='operator-btn' onClick={() => { addToCart(item.id) }}>+</button>
                            </div>
                            <p>${item.new_price * cartItems[item.id]}</p>
                        </div>
                    </div>

                </div>
                <hr />
            </div>


        }
        return null;
    })

    /* <div className="cartitems-format cartitem-format-main">
        <div className='cart-items-description'>
            <img src={item.image} alt="" className='carticon-producticon' />
            <p>{item.name}</p>
        </div>
        <p>${item.new_price}</p>
        <div className='quantity-btn'>
            <button className='operator-btn' onClick={()=> {removeFromCart(item.id)}}>-</button>
            <button className='cartitems-quantity'>{cartItems[item.id]}
            </button>
            <button className='operator-btn' onClick={()=>{addToCart(item.id)}}>+</button>
            </div>
        <p>${item.new_price * cartItems[item.id]}</p>
        <img className='cartitem-removeicon' src={remove_icon} onClick={() => { removeFromCartTotal(item.id) }} alt="" />
    </div>
    <hr />  */


    return (
        <div className='cartitems'>
            <div className=''>
                {/* <div className="cartitem-format-main">
                            <p>Products</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Total</p>
                            <p>Remove</p>
                        </div> */}
                <hr />
                {products}
            </div>

            <div className="cart-items-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-totalitem">
                            <p>Sub-Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-totalitem">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-totalitem">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <a href="/payment"><button>Proceed To Checkout</button></a>
                </div>
                <div className="cartitems-promocode">
                    <p>Enter promo code here , if available</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='Promo Code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems