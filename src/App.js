import React from 'react'
import ProductsIndex from './containers/ProductIndex'
import Home from './components/Home'
import Nav from './components/Nav'
import CartContainer from './containers/CartContainer'
import { Route, Switch } from 'react-router-dom'
//v6 has replaced Switch with Routes
//Switch means only 1 route shows at only 1 time

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

