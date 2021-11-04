import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProducts} from './redux/actions/product'
import ProductsIndex from './containers/productIndex'

export class App extends Component {


  componentDidMount(){
    this.props.getProducts()
  }

  render() {
    console.log("props", this.props)
    return (
      <div>
        {this.props.products.map((products) => <ProductsIndex {...products} key={products.id} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state)
  return {products: state.products}
}

export default connect(mapStateToProps, {getProducts} )(App)

