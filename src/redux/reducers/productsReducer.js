const initialCart = {
    products: []
}

const intialState = {
    products: [],
    cart: initialCart,
    total: 0
}


export default function reducer(state= intialState, action){
    switch (action.type){
        case "GET_PRODUCTS":
            return {...state, products: [...action.payload]}
        case "GET_CART":
            return {...state, cart: [...action.payload]}
        case "ADD_PRODUCTS":
            let updatedCart = {
                ...state.cart[1],
                purchase_carts: [...state.cart[1], action.payload]
            }
            return {...state, 
                cart: [updatedCart]
            }
        default:
            return {...state}
    }
}

