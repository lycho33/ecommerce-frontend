import React from 'react'
import './ProductItem.css'
import AddtoCartBtn from './AddtoCartBtn'

function ProductItem({id, image_url, name, price, quantity, addToCart, cart, products}) {

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
                            <h4>Price: ${price}</h4>
                            <h4>Quantity: {quantity}</h4><br />
                            {/* {cart.map(c => <AddtoCartBtn addToCart={addToCart} productIds={id} products={products} /> )} */}
                            <AddtoCartBtn addToCart={addToCart} productIds={id} products={products} />
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    // }
}

export default ProductItem
