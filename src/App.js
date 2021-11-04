import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProducts} from './actions/product'

export class App extends Component {


  componentDidMount(){
    this.props.getProducts()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {products: state.products}
}

export default connect(mapStateToProps, {getProducts} )(App)

