import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase';
import { useSignOut } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }

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
                {
                    user ?
                        <button className='logoutBtn' onClick={handleSignOut}>Logout</button>
                        :
                        <Link to={'/login'} >Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;