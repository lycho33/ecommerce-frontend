export const getProducts = () => {
    return (dispatch) => {
        fetch("http://localhost:4000/products")
            .then(r => r.json())
            .then(products => {
                dispatch({
                    type: "GET_PRODUCTS",
                    payload: products
                })
            })
    }
}

export const getCart = () => {
    return (dispatch) => {
        fetch("http://localhost:4000/cart")
            .then(r => r.json())
            .then(cart => {
                dispatch({
                    type: "GET_CART",
                    payload: cart
                })
            })
    }
}

export const addProductToCart = (obj) => {
    return (dispatch) => fetch("http://localhost:4000/cart/1/purchase_carts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
        .then(r => r.json())
        .then(addedProducts => {
            dispatch({
                type: "ADD_PRODUCTS",
                payload: addedProducts
            })
        })
}

export const removeItem = (id) => {
    return (dispatch) => fetch(`http://localhost:4000/cart/1/purchase_carts/${id}`, {
        method: "DELETE",
    })
        .then(item => {
            dispatch({
                type: "REMOVE_ITEM",
                payload: id
            })
        })
}

export const updateQuantity = (data) => {
    return (dispatch) => fetch(`http://localhost:4000/cart/1/purchase_carts/${data.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            quantity: data.increment,
            product_id: data.product_id,
            cart_id: data.cart_id
        })
    })
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: data.quantity
        })
    })
}