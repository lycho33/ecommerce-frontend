export const getProducts = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/products")
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
        fetch("http://localhost:3001/cart")
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
    return (dispatch) => fetch("http://localhost:3001/cart/1/purchase_carts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
        .then(r => r.json())
        // .then(review => console.log(review))
        .then(addedProducts => {
            dispatch({
                type: "ADD_PRODUCTS",
                payload: addedProducts
            })
        })
}