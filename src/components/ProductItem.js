import React, { Component } from 'react'

export class ProductItem extends Component {

    render() {
        console.log("product item", this.props)
        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <img src={this.props.image_url} alt="" />
                <p>Price: ${this.props.price}</p>
                <p>Quantity: {this.props.quantity}</p><br />
            </div>
        )
    }
}

export default ProductItem
