import React from 'react'
// import {connect} from 'react-redux'
import './CartContainer.css'
import { connect } from 'react-redux'
import Cart from '../components/Cart'

function CartContainer(props) {
        const {cartItems, navigateTo, pageCart, removeItem, cart} = props
        // console.log(pageCart, cartItems)
        console.log("Cart Container", cart)
 
        return (
            <div>
                <h1>Cart</h1>
                {/* {cartItems.map((items) => <Cart {...items} product={items} key={items.id} removeItem={removeItem}/>)} */}
            </div>
        )
}

const mapStateToProps = (state) => {
    console.log(state.cart)
    return {cart: state.cart}
}

// export default CartContainer
export default connect(mapStateToProps)(CartContainer)


// {cartItems.map(item => {
//     <h3>{item}</h3>
//     })}