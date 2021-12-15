import React from 'react'
import './CartContainer.css'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import {addProductToCart} from '../redux/actions/product'

function CartContainer(props) {
        const {cartItems, navigateTo, pageCart, removeItem, cart} = props
 
        return (
            <div>
                <h1>Cart</h1>
                {/* {cartItems.map((items) => <CartItem {...items} product={items} key={items.id} removeItem={removeItem}/>)} */}
                {cart.map(c => <Cart {...c} /> )}
            </div>
        )
}

const mapStateToProps = (state) => {
    console.log("cart container", state)
    return {
        cart: state.cart,
        products: state.products
    }
}

// export default CartContainer
export default connect(mapStateToProps, {})(CartContainer)


// {cartItems.map(item => {
//     <h3>{item}</h3>
//     })}