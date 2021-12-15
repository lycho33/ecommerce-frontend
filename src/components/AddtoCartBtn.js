// import React, { Component } from 'react'
// import './css/AddtoCartBtn.css'
// import { connect } from 'react-redux'
// import { useState } from 'react'
// import {addProductToCart} from '../redux/actions/product'

// class AddtoCartBtn extends Component {

//     state = {
//         cart_id: "1",
//         product_id: `${this.props.productIds}`,
//         quantity: "0"
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         this.props.addProductToCart(this.state)     
//     }

//     render() {
//         return ( 
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <button type="submit">Add To Cart</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default connect(null, {addProductToCart})(AddtoCartBtn)

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


