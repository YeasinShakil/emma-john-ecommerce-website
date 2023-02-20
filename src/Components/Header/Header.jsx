import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Link to={"/"}><img src={logo} alt="" /></Link>
            </div>
            <div className="nav">
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/orders"}
                >Orders</Link>
                <Link to={"/inventory"}>Inventory</Link>
                <Link to={"/about"}>About</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    );
};

export default Header;