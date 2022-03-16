import React from 'react'
import CartItem from './CartItem';
import { useState } from 'react'
import { connect } from 'react-redux'

function Cart(props) {
    const {id, purchase_carts, products, cart} = props
    
        return (
            <div >
                {purchase_carts.map(p => <CartItem {...p} products={products} cart={cart} /> )}
            </div>
        )
}

const mapStateToProps = (state) => {
    // console.log("CART", state)
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps, null)(Cart)
