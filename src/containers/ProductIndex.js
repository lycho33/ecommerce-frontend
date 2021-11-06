import React, { Component } from 'react'
import {getProducts} from '../redux/actions/product'
import {connect} from 'react-redux'
import ProductItem from '../components/ProductItem'
import SearchProducts from '../components/SearchProducts'

class ProductIndex extends Component {
    
    componentDidMount(){
        this.props.getProducts()
    }

    render() {
        return (
            <div>
                <SearchProducts />
                {this.props.products.map((products) => <ProductItem {...products} key={products}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)
    return {products: state.products}
}

export default connect(mapStateToProps, {getProducts} )(ProductIndex)