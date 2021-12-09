import React from 'react'
// import {connect} from 'react-redux'
import './CartContainer.css'
import Cart from '../components/Cart'

function CartContainer(props) {
        const {cartItems, navigateTo, pageCart, removeItem} = props
        // console.log(pageCart, cartItems)

        return (
            <div>
                <h1>Cart</h1>
                {/* {cartItems.map((items) => <Cart {...items} product={items} key={items.id} removeItem={removeItem}/>)} */}
            </div>
        )
}

export default CartContainer


// {cartItems.map(item => {
//     <h3>{item}</h3>
//     })}