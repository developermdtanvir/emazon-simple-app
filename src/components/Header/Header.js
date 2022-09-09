import logo from 'file:///home/linux/Documents/web-development/Think-in-React/emazon-simple-app/src/images/logo.png';
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order</a>
                <a href="/manage">Manage</a>
                
            </nav>
           <div className='header-search'>
           <input type="text" placeholder='type here to search' />
           </div>
        </div>
     );
}
 
export default Header; 
