import React from 'react'
import './ProductItem.css'
import RemoveItem from './RemoveItemBtn';
import './RemoveItemBtn'

// import AddtoCartBtn from './AddtoCartBtn'

function Cart(props) {
    const {id, image_url, name, price, quantity, category, product, removeItem} = props;
    // console.log("Cart Component", props)

        return (
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
                            <RemoveItem removeFromCart={removeItem} product={product}/>
                        </div>
                 
                    </div>
                </div>
            </div>
        )

}

export default Cart
