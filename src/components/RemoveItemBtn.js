import React from 'react'
import { connect } from 'react-redux'
import './css/AddtoCartBtn.css'
import {removeItem} from '../redux/actions/actionCreator'

function RemoveItemBtn(props) {
    const {cartItemId, removeItem} = props

    const handleRemove = (e) => {
        console.log("hi")
        e.preventDefault()
        removeItem(cartItemId)
        e.target.offsetParent.parentNode.parentNode.remove()
    } 

    return (
        <div>
            <button onClick={handleRemove}>Delete</button>
        </div>
    )
}

export default connect(null, {removeItem})(RemoveItemBtn)

