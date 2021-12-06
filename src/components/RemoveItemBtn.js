import React from 'react'

function RemoveItemBtn(props) {
    const {removeFromCart, product} = props
    console.log("remove", props)
    return (
        <div>
            <button onClick={() => removeFromCart(product)}>Remove Item From Cart</button>
        </div>
    )
}

export default RemoveItemBtn

