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