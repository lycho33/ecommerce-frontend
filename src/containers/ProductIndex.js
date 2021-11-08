import { useEffect, useState } from "react"
import {getProducts} from '../redux/actions/product'
import {connect} from 'react-redux'
import ProductItem from '../components/ProductItem'
import SearchProducts from '../components/SearchProducts'
import CartContainer from './CartContainer'

function ProductIndex({getProducts, products}) {

    // filterProdcuts(name) {
    //     this.props.products.filter((product) => product.name == name )
    // }

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x ))
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }
  
    // componentDidMount(){
    //     this.props.getProducts()
    // }

    useEffect(getProducts, [getProducts])

    // render() {
        return (
            <div>
                {/* <SearchProducts products={this.props.products}/> */}
                <CartContainer onAdd={onAdd} cartItems={cartItems} />
                {products.map((products) => <ProductItem {...products} key={products.id} onAdd={onAdd} /> )}
            </div>
        )
    }
// }

const mapStateToProps = (state) => {
    // console.log("state", state)
    return {products: state.products}
}

export default connect(mapStateToProps, {getProducts} )(ProductIndex)