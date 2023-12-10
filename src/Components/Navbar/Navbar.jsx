import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import nav_menu from '../Assets/hamburger.png'
import user_login  from '../Assets/user-interface.png'
import { Link, } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


export const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext)
    const [nav, setNav] = useState('home');

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav)
    }

    window.addEventListener('click', (event) => {
        if (!event.target.classList.contains('close')) {
            setShowNav(false)
        }
    });

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to="/">
                <img src={logo} alt='navLogo' />
                    <p>E-shop</p>
                </Link>
            </div>

            <nav className={`menu-container ${showNav ? 'active' : 'inactive'}`}>
                <ul className='menu-links'>
                    <li onClick={() => { setNav('home') }}>
                        <Link to='/'>Home</Link>
                        {nav === 'home' ? <hr /> : ""}
                    </li>
                    <li onClick={() => { setNav('shop') }}>
                        <Link to='/shop'>Shop</Link>
                        {nav === 'shop' ? <hr /> : ""}
                    </li>
                    <li onClick={() => { setNav('men') }}>
                        <Link to='/mens'>Men</Link>
                        {nav === 'men' ? <hr /> : ""}
                    </li>
                    <li onClick={() => { setNav('women') }}>
                        <Link to='/womens'>Women</Link>
                        {nav === 'women' ? <hr /> : ""}
                    </li>
                    <li onClick={() => { setNav('kids') }}>
                        <Link to='/kids'>Kids</Link>
                        {nav === 'kids' ? <hr /> : ""}
                    </li>
                </ul>
            </nav>
            <div className="login-cart">
                <Link to='/signup'>
                    <img src={user_login} alt="login"className='login-img'/>
                </Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <div className="menu-icon " onClick={toggleNav}>
                <img src={nav_menu} alt="menu" className="close" />
            </div>

        </div>
    )
}
