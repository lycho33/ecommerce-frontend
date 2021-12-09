import React from 'react'
import './AddtoCartBtn.css'

function AddtoCartBtn(props) {
    console.log("add to cart", props)
    console.log("button", props.products.id)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                {/* <button className="add-btn" onClick={() => props.addToCart(props.products)}>Add To Cart</button> */}
                <button type="submit">Add To Cart</button>
            </form>
        </div>
    )
}

export default AddtoCartBtn

