import React from 'react'
import './css/ProductItem.css'
import RemoveItem from './RemoveItemBtn';
import './RemoveItemBtn'
import { connect } from 'react-redux';

function CartItem(props) {
    const getItem = () => {
        let product = props.products.find(p => p.id === props.product_id)
        return product
    }
    const {id, image_url, name, price} = getItem()

    return (
        <>
            <div className='products'>
                <div className="left">
                    <img src={image_url} alt="" />
                </div>
                <div className="right">
                    <div className="product-info">
                        <i class="fa fa-search"></i>
                        <i class="fa fa-user"></i>
                        <i class="fa fa-shopping-cart"></i>
                        <div className="details">
                            <h3>{name}</h3>
                            <h4>Price: ${price}</h4><br />
                            <RemoveItem cartItemId={props.id} product={props.products}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
