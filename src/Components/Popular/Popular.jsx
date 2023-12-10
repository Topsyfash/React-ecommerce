import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

const Popular = () => {

    const products = data_product.map((item) => {
        return <Item 
            id={item.id}
            name={item.name}
            image ={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
        />
    })

  return (
      <div className='popular'>
          <h1>Popular</h1>
          <hr />
          <div className="popular-item">
              {products}
          </div>
    </div>
  )
}

export default Popular