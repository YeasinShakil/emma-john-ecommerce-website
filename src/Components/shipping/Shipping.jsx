import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase';
import './shipping.css'
const Shipping = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [user] = useAuthState(auth);

    const nameBlur = event => {
        setName(event.target.value)
    }
    const addressBlur = event => {
        setAddress(event.target.value)
    }
    const phoneBlur = event => {
        setPhone(event.target.value)
    }

    const handleShippingAddress= (e) => {
        e.preventDefault();
        let shippingInfo = {
            name: name,
            email: email,
            address: address,
            phone: phone
        }
        console.log(shippingInfo)
    }
    return (
        <div className='form-container signUp-fromContainer'>
            <h1 className='form-title'>Shipping Information</h1>
            <form onSubmit={handleShippingAddress}>
                <div className='input-group'>
                
                <label htmlFor="email">Name</label>
                <input onBlur={nameBlur}  type="text" name="name" id="" required />
                <label htmlFor="email">Email</label>
                <input value={user?.email} readOnly type="email" name="email" id="" required />
                </div>
                <div className='input-group'>
                <label htmlFor="password">Address</label>
                <input  onBlur={addressBlur} type="text" name="address" id="" required style={{height: '80px'}} />
                </div>
                
                <div className='input-group'>
                <label htmlFor="confirm-password">Phone</label>
                <input onBlur={phoneBlur} type="text" name="phone" id="" required />
                </div>
                {/* <button type="submit">Sign Up</button> */}
                <input className='submit_button' type="submit" value="Shipping Address" />
            </form>
            
        </div>
    );
};

export default Shipping;