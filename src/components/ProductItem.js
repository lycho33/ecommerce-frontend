import React, { Component } from 'react'
import './ProductItem.css'
import AddtoCartBtn from './AddtoCartBtn'

export class ProductItem extends Component {


    render() {
        console.log("product item", this.props)
        return (
            <div className='products'>
                <div className="left">
                    <img src={this.props.image_url} alt="" />
                </div>
                <div className="right">
                    <div className="product-info">
                        <i class="fa fa-search"></i>
                        <i class="fa fa-user"></i>
                        <i class="fa fa-shopping-cart"></i>
                        <div className="details">
                            <h3>{this.props.name}</h3>
                            <h4>Price: {this.props.price}</h4>
                            <h4>Quantity: {this.props.quantity}</h4><br />
                            <AddtoCartBtn onAdd={() => this.props.onAdd()} />
                        </div>
                 
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem
