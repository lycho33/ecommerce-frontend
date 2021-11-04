import React, { Component } from 'react'
import {getProducts} from '../redux/actions/product'
import {connect} from 'react-redux'

class ProductIndex extends Component {
    
    componentDidMount(){
        this.props.getProducts()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                  {this.props.products.map((products) => console.log(products))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)
    return {products: state.products}
}

export default connect(mapStateToProps, {getProducts} )(ProductIndex)