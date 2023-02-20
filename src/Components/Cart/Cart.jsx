import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    let quantity = 0;
    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping += product.shipping;
    }
    let tax = parseFloat(((total / 100) * 10).toFixed(2));
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2 className='cart-name'>Order Summery</h2>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Shipping Charge: $ {shipping}</p>
            <p>Tax: $ {tax}</p>
            <h4>Grand Total: $ {grandTotal}</h4>
            <Link to='/orders'>
            <button className='order-review-btn'>Order review</button>
            </Link>
        </div>
    );
};

export default Cart;