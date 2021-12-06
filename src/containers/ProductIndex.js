import { useEffect, useState } from "react"
import {connect} from 'react-redux'

import {getProducts} from '../redux/actions/product'

import ProductItem from '../components/ProductItem'
import SearchProducts from '../components/SearchProducts'
import CartContainer from './CartContainer'
import { render } from "react-dom"

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'

function ProductIndex({getProducts, products}) {

    // filterProdcuts(name) {
    //     this.props.products.filter((product) => product.name == name )
    // }

    const [cartItems, setCartItems] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS)

    const addToCart = (product) => {
        console.log("add to cart")
        setCartItems([...cartItems, {...product}])
        console.log(cartItems)
    }

    const renderProducts = () => (
        products.map((products) => <ProductItem {...products} products={products} key={products.id} addToCart={addToCart} /> )
    )

    const renderCart = () => {
        return <CartContainer navigateTo={navigateTo} cartItems={cartItems} pageCart={PAGE_CART} removeItem={removeFromCart}/>
    }

    const navigateTo = (nextPage) => {
        setPage(nextPage)
        console.log(nextPage)
    }

    const removeFromCart = (productRemoved) => {
        setCartItems(cartItems.filter(product => product !== productRemoved))
    }

    useEffect(getProducts, [getProducts])

        return (
            <div>
                <button onClick={() => navigateTo(PAGE_CART)}>Go To Cart ({cartItems.length})</button>
                <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
                {page === PAGE_CART && renderCart()}
                {page === PAGE_PRODUCTS && renderProducts()}
            </div>
        )
    }


const mapStateToProps = (state) => {
    // console.log("state", state)
    return {products: state.products}
}

export default connect(mapStateToProps, {getProducts})(ProductIndex)