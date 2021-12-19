import React from 'react'
import { connect } from 'react-redux'
import './css/AddtoCartBtn.css'
import {removeItem} from '../redux/actions/product'

function RemoveItemBtn(props) {
    const {cartItemId, removeItem} = props
    console.log("remove", props)

    const handleRemove = (e) => {
        e.preventDefault()
        e.target.offsetParent.parentNode.parentNode.remove()
        removeItem(cartItemId)
    } 

    return (
        <div>
            <button onClick={handleRemove}>Delete</button>
        </div>
    )
}

export default connect(null, {removeItem})(RemoveItemBtn)

