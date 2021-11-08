import React from 'react'

function CartContainer(props) {
        const { cartItems, onAdd } = props

        return (
            <div>
                <h2>Cart Items</h2>
                <div>
                    {cartItems.length === 0 && <div>Cart Is Empty</div>}
                </div>
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button onClick={() => onAdd(item)} className="add">+</button>
                        </div>
                        <div className="col-2 text-right">
                            {item.quantity} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
        )
}

export default CartContainer
