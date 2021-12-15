import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import {addProductToCart} from '../redux/actions/product'
import './css/AddtoCartBtn.css'


function AddtoCartBtn({productIds, products, addProductToCart}) {
    const [cart_id, setCart_id] = useState("1")
    const [product_id, setProduct_id] = useState(productIds)
    const [quantity, setQuantity] = useState("0")

    const handleSubmit = e => {
        e.preventDefault()
        const newItem = {cart_id, product_id, quantity}
        addProductToCart(newItem)     
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Add To Cart</button>
            </form>
        </div>
    )
}

export default connect(null, {addProductToCart})(AddtoCartBtn)


