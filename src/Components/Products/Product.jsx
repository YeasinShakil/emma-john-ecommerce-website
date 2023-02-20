import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {name, id, img, ratings, price, seller} = props.product;
    const {handleAddtoCart} = props;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3 className='product-name'>{name}</h3>
            <h5 className='product-brand'>Brand: {seller}</h5>
            <h4 className='product-review'>
            <div className="checkoutProduct_ratings">
                    {Array(ratings)
                        .fill()
                        .map((_, i) => (
                            <p><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>
                        ))}
                </div>
            </h4>
            <h3 className='product-price'>$ {price}</h3>
            
            <button className="btn" onClick={()=> handleAddtoCart(props.product)}>
                <p>Add Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;