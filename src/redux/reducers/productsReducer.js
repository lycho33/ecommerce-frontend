const intialState = {
    products: [],
    cart: [],
}

export default function reducer(state= intialState, action){
    switch (action.type){
        case "GET_PRODUCTS":
            return {...state, products: [...action.payload]}
        case "GET_CART":
            return {...state, cart: [...action.payload]}
        case "ADD_PRODUCTS":
            const item = state.products.find(p => p.id === action.payload.product_id)
            // const cart = state.cart.find(c => c.id === action.payload.cart_id)
            const updatedCart = {
                ...state.cart[0],
                purchase_carts: [...state.cart[0].purchase_carts, action.payload]
            }
            debugger
            return {
                ...state,
                cart:[updatedCart]
            }
        default:
            return {...state}
    }
}

