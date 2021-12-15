import React, { Component } from 'react'
import './css/AddtoCartBtn.css'
import { connect } from 'react-redux'
import { useState } from 'react'
import {addProductToCart} from '../redux/actions/product'

class AddtoCartBtn extends Component {

    state = {
        cart_id: "1",
        product_id: `${this.props.productIds}`,
        quantity: "0"
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addProductToCart(this.state)     
    }

    render() {
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <button className="add-btn" onClick={() => props.addToCart(props.products)}>Add To Cart</button> */}
                    <button type="submit">Add To Cart</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addProductToCart})(AddtoCartBtn)
// export default AddtoCartBtn

