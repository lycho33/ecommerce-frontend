import React from 'react'
import './ProductItem.css'
import RemoveItem from './RemoveItemBtn';
import './RemoveItemBtn'

function CartItem(props) {
    const {item, products} = props
    console.log("Cart Item", props)

    const getItem = () => {
        let purchase_carts = item
        let product = purchase_carts.find(item => item.product_id === products.id)
        console.log(product)
        return product
    }
    return (
        <>
        {getItem}
            {/* <div className='products'>
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
            </div> */}
        </>
    )
}

export default CartItem
