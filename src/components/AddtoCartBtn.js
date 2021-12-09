import React from 'react'
import './AddtoCartBtn.css'
import { connect } from 'react-redux'
import {addProductToCart} from '../redux/actions/product'

function AddtoCartBtn(props) {
    const {cartId, productId, products} = props

    const handleSubmit = e => {
        e.preventDefault()
        addProductToCart(cartId, products)
        console.log("ADD BUTTON", products, cartId)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                {/* <button className="add-btn" onClick={() => props.addToCart(props.products)}>Add To Cart</button> */}
                <button type="submit">Add To Cart</button>
            </form>
        </div>
    )
}

export default connect(null, {addProductToCart})(AddtoCartBtn)
// export default AddtoCartBtn

