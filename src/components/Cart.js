import React from 'react'
import CartItem from './CartItem';
import { connect } from 'react-redux'

// import AddtoCartBtn from './AddtoCartBtn'

function Cart(props) {
    // const {id, image_url, name, price, quantity, category, product, removeItem} = props;
    const {id, purchase_carts, products} = props
    console.log("Cart Component", props)

    

        return (
            <div >
                {purchase_carts.map(p => <CartItem {...p} products={products} /> )}
            </div>
        )
}

const mapStateToProps = (state) => {
    console.log("CART", state)
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(Cart)
// export default Cart
