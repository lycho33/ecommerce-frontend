import React from 'react'
import ProductsIndex from './containers/ProductIndex'
import Home from './components/Home'
import Nav from './components/Nav'
import CartContainer from './containers/CartContainer'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import {getProducts} from './redux/actions/product'
import {getCart} from './redux/actions/product'
import { useEffect} from "react"

import './App.css'

function App({getProducts, getCart}) {

  useEffect(getProducts, [getProducts])
  useEffect(getCart, [getCart])

    return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductsIndex} />
          <Route path="/cart" component={CartContainer} />
        </Switch>
      </>
    )
  }

export default connect(null, {getProducts, getCart} )(App)


