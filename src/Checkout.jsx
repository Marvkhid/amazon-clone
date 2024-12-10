import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.jsx'
import { useStateValue } from './StateProvider.jsx'
import CheckoutProduct from './CheckoutProduct.jsx'

const Checkout = () => {
  const [{ basket, user}, dispatch] = useStateValue()
  return (
    <div className='checkout'>
        <div className="checkout-left">
          <img className='checkout-ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
          <div className="checkout-title">
          <h3>Hello, {user ? user.email : "Guest"}</h3>
            <h2>Your Shopping Basket</h2>

            {basket.map((item, index) => (
                <CheckoutProduct
                  key={item.id || index} 
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}


          </div>
        </div>
        <div className="checkout-right">
          <Subtotal />
        </div>
    </div>
  )
}

export default Checkout