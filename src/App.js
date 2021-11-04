import React, { Component } from 'react'
import ProductsIndex from './containers/ProductIndex'
import Home from './components/Home'
import Nav from './components/Nav'
import { Route, Routes } from "react-router-dom";
//v6 has replaced Switch with Routes
//Swith means only 1 route shows at only 1 time

export class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
            <Route path="product"><ProductsIndex /></Route>
            <Route exact path="/"><Home /></ Route>
            <Route path="/" component={404} />
            {/* <Route path="/products">
              <ProductsIndex />
            </Route> */}
        </Routes>
        <Home />
        <ProductsIndex />
      </div>
    )
  }
}

export default App

