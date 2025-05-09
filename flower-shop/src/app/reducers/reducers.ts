import { ListOfProductos, Producto } from "../types/productos";

export const cartInitialState: ListOfProductos = JSON.parse(window.localStorage.getItem('cart') || '[]')




export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = (state: ListOfProductos) => {
    console.log("Saving to localStorage:", state);
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state: ListOfProductos, action: { type: string, payload: Producto }) => {
    const { type: actionType, payload: actionPayload } = action
    switch (actionType) {
        case CART_ACTIONS_TYPES.ADD_TO_CART: {
            console.log("Action Payload:", actionPayload);
            const { id } = actionPayload
            const itemInCartIndex = state.findIndex((i) => i.id === id)
            if (itemInCartIndex >= 0) {
                const newState = [
                    ...state.slice(0, itemInCartIndex),
                    { ...state[itemInCartIndex], cantidad: state[itemInCartIndex].cantidad + 1 },
                    ...state.slice(itemInCartIndex + 1)
                ]

                updateLocalStorage(newState)
                return newState
            }
            const newState = [...state, { ...actionPayload, cantidad: 1 }]
            updateLocalStorage(newState)
            return newState
        }
        case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
            const { id } = actionPayload
            const newState = state.filter((i) => i.id !== id)
            updateLocalStorage(newState)
            return newState

        }
        case CART_ACTIONS_TYPES.CLEAR_CART: {
            updateLocalStorage([])
            return []
        }
        default: {
            return state
        }
    }
}

