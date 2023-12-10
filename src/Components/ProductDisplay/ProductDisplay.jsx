import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    const handleClick = (e) => {
        e.preventDefault();
        addToCart(product.id)

    }
    
    return (
        <div className='product-display'>
            <div className="productdisplay-left">
                <div className="productdisplay-image-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className='product-display-mainimg' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(10)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="old-price">
                        ${product.old_price}
                    </div>
                    <div className="new-price">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-description">
                    A lightweight knitted shirt
                </div>
                <div className="product-size">
                    <h1>Select Size</h1>
                    <div className="product-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div> 
                    </div>
                </div>
                <button onClick={handleClick} >ADD TO CART</button>
                <p className='product-category'><span>Category:</span>Women , T-shirt , Crop Top</p>
                <p className='product-category'><span>Tags:</span>Modern, Latest </p>
            </div>
        </div>
    )
}

export default ProductDisplay