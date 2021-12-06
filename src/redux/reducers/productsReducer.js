const intialState = {
    products: [],
    addedProducts: [],
    total: 0
}

export default function reducer(state= intialState, action){
    switch (action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload}
        default:
            return {...state}
    }
}

