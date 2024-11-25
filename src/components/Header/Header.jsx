import React from 'react'
import './Header.scss'
const Header = () => {
  return (
    <>
     <div className="navbar">
      <div className="navbar-logo">SHOP.CO</div>
      <div className="navbar-menu">
        <a href="/shop" className="navbar-link">Shop</a>
        <a href="/sale" className="navbar-link">On Sale</a>
        <a href="/new" className="navbar-link">New Arrivals</a>
        <a href="/brands" className="navbar-link">Brands</a>
      </div>
      <div className="navbar-icons">
        <a href="/cart" className="navbar-icon">🛒</a>
        <a href="/account" className="navbar-icon">👤</a>
      </div>
    </div>
    </>
  )
}

export default Header