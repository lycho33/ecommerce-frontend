import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { updateQuantity } from '../redux/actions/actionCreator';
import RemoveItem from './RemoveItemBtn';
import './css/ProductItem.css'
import './css/AddtoCartBtn.css'
import './css/CartItem.css'
import './RemoveItemBtn'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus} from 'react-icons/ai';

function CartItem(props) {
    const [increment, setIncrement] = useState(1)

    const getItem = () => {
        let product = props.products.find(p => p.id === props.product_id)
        return product
    }
    const {image_url, name, price} = getItem()

    const handleClick = (e) => {
        if(e.target.value === '+'){
            setIncrement(increment + 1)
            const data = {
                increment: increment,
                id: props.id,
                cart_id: props.cart_id,
                product_id: props.product_id
            }
            props.updateQuantity(data)
        }
        if(e.target.value === '-' && increment >= 1){
            setIncrement(increment - 1)
            props.updateQuantity(increment)
        }
    }

    return (
        <>
            <div className='products'>
                <div className="left">
                    <img src={image_url} />
                </div>
                <div className="right">
                    <div className="product-info">
                        <i class="fa fa-search"></i>
                        <i class="fa fa-user"></i>
                        <i class="fa fa-shopping-cart"></i>
                        <div className="details">
                            <h3>{name}</h3>
                            <h4>Price: ${price}</h4>
                            <div className='quantity-container'>
                                <h4>Quantity: </h4>
                                {increment}
                                <button onClick={handleClick} value='+' >+</button>
                                <button onClick={handleClick} value='-'>-</button>
                            </div>
                            <RemoveItem cartItemId={props.id} product={props.products}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(null, { updateQuantity })(CartItem)
