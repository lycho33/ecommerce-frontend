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
            const updatedCart = {
                ...state.cart[0],
                purchase_carts: [...state.cart[0].purchase_carts, action.payload]
            }
            return {
                ...state,
                cart:[updatedCart]
            }
        case "REMOVE_ITEM":
            const itemToRemove = state.cart[0].purchase_carts.filter(item => item.id !== action.payload)
            return {
               ...state,
               purchase_carts: itemToRemove
            }
        case 'UPDATE_QUANTITY': 
            const quantity = {
                ...state.cart[0],
                purchase_carts: [...state.cart[0].purchase_carts, action.payload]
            }
            return {
                ...state,
                purchase_carts: action.payload
            }
        default:
            return {...state}
    }
}

