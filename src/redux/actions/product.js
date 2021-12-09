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

export const addProductToCart = (cartId, products) => {
    return (dispatch) => fetch(`http://localhost:3001/cart/${cartId}/purchase_carts`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(products),
    })
    .then(r => r.json())
    // .then(r => {
    //     if (r.ok) {
    //         r.json().then(products => dispatch({type: "ADD_PRODUCTS", payload: products}))
    //     } else {
    //         r.json().then(r => alert(r.errors))
    //     }
    // })
    .then(products => {
        dispatch({
            type: "ADD_PRODUCTS",
            payload: products
        })
    })
}

// export const addToCart = id => {
//     return {
//       type: "ADD_TO_CART",
//       id
//     };
// };

// export const addToCart = () => {
//     return dispatch => fetch("http://localhost:3001/carts", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(),
//     })
//     .then(r => handleCart(r, dispatch))
// }

// function handleCart(res, dispatch) {
    // type
    // payload
// }