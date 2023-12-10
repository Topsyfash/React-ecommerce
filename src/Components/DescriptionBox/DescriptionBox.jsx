import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
      <div className='descriptionbox'>
          <div className="descriptionbox-nav">
              <div className="descriptionbox-nav-box">
                  Description
              </div>
              <div className="descriptionbox-nav-box fade">
                  Reviews (58)
              </div>
          </div>

          <div className="descriptionbox-description">
              <p>
                  An E-commerce website is an online platform for buying and selling of products or services over the internet
              </p>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti cupiditate placeat voluptates autem eum earum asperiores possimus doloribus aliquam, libero itaque mollitia incidunt excepturi cum aliquid ratione id ut?
              </p>
          </div>
    </div>
  )
}

export default DescriptionBox