import React from 'react'
import './CartContainer.css'
import { connect } from 'react-redux'
import Cart from '../components/Cart'

function CartContainer(props) {
        const {cart} = props
 
        return (
            <div>
                <h1 className='cart-container-title'>You're only a step away</h1>
          
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