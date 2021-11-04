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