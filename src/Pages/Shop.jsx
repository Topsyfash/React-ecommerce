import React from 'react'
import all_product from '../Components/Assets/all_product'
import Item from '../Components/Items/Item'
import './CSS/Shop.css'


const Shop = () => {


    const products = all_product.map((item) => {
        return <Item
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
        />
    })

    return (
        <div className='shop-products'>
            <h1>Available Products</h1>
            <hr />
            <div className='shop-products-item'>
                {products}
            </div>
        </div>
    )
}

export default Shop