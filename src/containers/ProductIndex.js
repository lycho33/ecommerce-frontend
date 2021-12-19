import React from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'

function ProductIndex({products, cart}) {
    const renderProducts = () => (
        products.map((products) => <ProductItem {...products} products={products} key={products.id} cart={cart}/> )
    )

    return (
        <div>
             {renderProducts()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(ProductIndex)
