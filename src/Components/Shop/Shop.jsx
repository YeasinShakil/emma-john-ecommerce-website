import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/UseProducts';
import { addToDb, getStoredCart } from '../../utilities/FakeDb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    // Geting item from local storage
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddtoCart = (selectedProduct) => {
        let newCart = [];
        let exist = cart.find(product => product.id === selectedProduct.id)

        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        console.log(selectedProduct.quantity)

        setCart(newCart)

        // Add Quantity to the storage
        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => {
                        return (
                            <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>
                        )
                    })
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}><button className='order-review-btn' onClick={()=> navigate('/orders')}>Order Review</button></Cart>
            </div>
        </div>
    );
};

export default Shop;