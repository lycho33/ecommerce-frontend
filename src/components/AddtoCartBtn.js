import React from 'react'
import './AddtoCartBtn.css'

function AddtoCartBtn(props) {

    return ( 
        <div>
            <button className="add-btn" onClick={() => props.addToCart(props.products)}>Add To Cart</button>
        </div>
    )
}

export default AddtoCartBtn

