import React, { Component } from 'react'

export class SearchProducts extends Component {
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        debugger
        this.props.products.filter((product) => product.name == e.target.value )
        console.log(this.props.products.filter((product) => product.name == e.target.value ))
    }

    render() {
        // console.log("FORM", this.props.products)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="enter products" onChange={this.onChange}/>
                    <button type="submit" value="Submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchProducts
