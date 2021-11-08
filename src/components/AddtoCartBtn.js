import React from 'react'

function AddtoCartBtn(props) {
    const {onAdd} = props    
    // console.log("button", props)
    return (
        <div>
            <button className="add-btn" onClick={onAdd}>Add To Cart</button>
        </div>
    )
}

export default AddtoCartBtn

