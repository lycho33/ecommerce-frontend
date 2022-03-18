import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import {addProductToCart} from '../redux/actions/actionCreator'
import './css/AddtoCartBtn.css'


function AddtoCartBtn({productIds, products, addProductToCart}) {
    const [cart_id, setCart_id] = useState("1")
    const [product_id, setProduct_id] = useState(productIds)
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = e => {
        e.preventDefault()
        const newItem = {cart_id, product_id, quantity}
        console.log(newItem)
        addProductToCart(newItem)     
    }

    return (
        <div className="addCartBtn">
            <button onClick={handleSubmit} className="btns">Add To Cart</button>
        </div>
    )
}

export default connect(null, {addProductToCart})(AddtoCartBtn)


