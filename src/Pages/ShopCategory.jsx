import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'
import { Link } from 'react-router-dom'

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext)

  const allProducts = all_products.map((item, index) => {
    return props.category === item.category ? <Item
      key={index}
      id={item.id}
      name={item.name}
      image={item.image}
      new_price={item.new_price}
      old_price={item.old_price}
    /> :
      null
  })

  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} alt="" />
      {/* <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1- 12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by  <img src={dropdown_icon} alt="" />
        </div>
      </div> */}

      <div className="shopCategory-products">
        {allProducts}
      </div>
      <div className="shopCategory-loadMode">
        <Link to='/shop'>
          Explore more
        </Link>
      </div>
    </div>
  )
}

export default ShopCategory