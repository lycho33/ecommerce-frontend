import React from 'react'
import './CartContainer.css'
import { connect } from 'react-redux'
import Cart from '../components/Cart'

function CartContainer(props) {
        const {cart} = props
 
        return (
            <div>
                <h1>Cart</h1>
          
                {cart.map(c => <Cart {...c} cart={c} /> )}
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps, {})(CartContainer)