import React from 'react'
import ProductsIndex from './containers/ProductIndex'
import Home from './components/Home'
import Nav from './components/Nav'
import CartContainer from './containers/CartContainer'
import { Route, Switch } from 'react-router-dom'

import './App.css'

function App() {
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


export default App

