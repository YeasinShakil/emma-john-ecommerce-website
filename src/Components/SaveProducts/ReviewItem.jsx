import React from 'react';
import './reviewitem.css';
import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const { name, img, price, shipping, quantity } = product;

    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="item-details">
                <div className="product-details">
                    <h3 className="product-name" title={name}>{name.length > 25 ? name.slice(0, 25) + '...' : name}</h3>
                    <p className="product-price">Price: <span>${price}</span></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-btn" onClick={()=> handleRemoveProduct(product)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;