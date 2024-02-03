import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Cart = () => {
  if (Cookies.get('jwt_token') === undefined) {
    console.log('user is Authorized')
    return <Redirect to="/login" />
  }
  return (
    <div className="products-container">
      <Header />
      <div className="products-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png "
          alt="cart"
          className="products-img"
        />
      </div>
    </div>
  )
}

export default Cart
