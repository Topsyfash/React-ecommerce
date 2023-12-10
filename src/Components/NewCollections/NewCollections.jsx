import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Items/Item'

const NewCollections = () => {

    const collections = new_collection.map((item,index) => {
        return <Item 
             id={item.id}
            name={item.name}
            image ={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
        />
    })

    
  return (
      <div className='new-collections'>
          <h1>New Collections</h1>
          <hr />
          <div className="collections">
              {collections}
          </div>
    </div>
  )
}

export default NewCollections