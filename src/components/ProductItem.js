import React from 'react'
import './css/ProductItem.css'
import AddtoCartBtn from './AddtoCartBtn'
import { useState } from 'react'

function ProductItem({id, image_url, name, price, quantity, category, products, incrementNum}) {
    const [number , setNumber] = useState(0)

    const incrementButton = () => {
        let newNumber = number + parseInt(incrementNum)
        setNumber(newNumber)
    }

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
                            {/* <button onClick={incrementButton}>{number}</button> */}
                            <AddtoCartBtn productIds={id} products={products} />
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
}

export default ProductItem
