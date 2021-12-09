const intialState = {
    products: [],
    cart: [],
    total: 0
}

export default function reducer(state= intialState, action){
    switch (action.type){
        case "GET_PRODUCTS":
            return {...state, products: [...action.payload]}
        // case "ADD_TO_CART":
        //     return {...state, cart: {...state.cart, products: [action.payload, ...state.cart.products]}}
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        default:
            return {...state}
    }
}

