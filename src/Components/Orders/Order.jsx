import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/UseProducts';
import { removeFromDb } from '../../utilities/FakeDb';
import Cart from '../Cart/Cart';
import ReviewItem from '../SaveProducts/ReviewItem';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) => {
        
        const rest = cart.filter(pd=> product.id !== pd.id)
        setCart(rest)
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    cart.map(product=> <ReviewItem handleRemoveProduct={handleRemoveProduct} key={product.id} product={product} ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}><Link to='/inventory'><button>Proceed Checkout</button></Link></Cart>
            </div>
        </div>
    );
};

export default Order;