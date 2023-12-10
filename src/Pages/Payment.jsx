import React from 'react'
import './CSS/Payment.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const Payment = () => {

    const {getTotalCartAmount} = useContext(ShopContext)

    return (
        <div className='payment'>
            <div className="payment-container">
                <div className="payment-info">
                    <h4>Card Number</h4>
                    <input type="number" placeholder='1234 5678 9012 3456'/>
                </div>

                <div className="card-details">
                    <div className="payment-info expiration">
                        <h4>Expiry Date</h4>
                        <span className='expiry-merge'>
                            <input type="text" name='month' placeholder='MM' maxLength="2" size="2" />
                            <span>/</span>
                            <input type="text" name='year' placeholder='YY' maxLength="2" size="2" />
                        </span>
                    </div>

                    <div className="payment-info cvv">
                        <h4>CVV</h4>
                        <input type="tel" inputMode='numeric' pattern='[0-9\s]{3}' placeholder='123' maxLength="3" />
                    </div>
                </div>

                <div className="payment-info">
                    <h4>Card Pin</h4>
                    <input type="tel" maxLength='4' placeholder='1234' inputMode='numeric' />
                </div>
                <button>{`Pay $${getTotalCartAmount()}`}</button>
            </div>
        </div>
    )
}

export default Payment