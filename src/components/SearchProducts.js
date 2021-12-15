// import React, { Component } from 'react'

// export class SearchProducts extends Component {
//     onChange = (e) => {
//         this.setState({[e.target.name]: e.target.value})
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         this.props.products.filter((product) => product.name == e.target.value )
//         console.log(this.props.products.filter((product) => product.name == e.target.value ))
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" placeholder="enter products" onChange={this.onChange}/>
//                     <button type="submit" value="Submit">Search</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default SearchProducts

import React from 'react'

function SearchProducts() {
    const onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        this.props.products.filter((product) => product.name == e.target.value )
        console.log(this.props.products.filter((product) => product.name == e.target.value ))
    }

    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="enter products" onChange={this.onChange}/>
                <button type="submit" value="Submit">Search</button>
            </form>
        </div>
    )
}

export default SearchProducts

