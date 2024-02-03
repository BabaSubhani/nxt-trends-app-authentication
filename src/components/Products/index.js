import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Products = () => {
  if (Cookies.get('jwt_token') === undefined) {
    console.log('user is Authorized')
    return <Redirect to="/login" />
  }

  return (
    <div className="products-container">
      <Header />
      <div className="products-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png "
          alt="products"
          className="products-img"
        />
      </div>
    </div>
  )
}

export default Products
