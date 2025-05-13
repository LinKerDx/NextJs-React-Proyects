'use client'

import { createContext, useReducer } from "react"
import { CartContextType, Producto } from "../types/productos"
import { cartReducer, cartInitialState } from "../reducers/reducers"



export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
})



function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (item: Producto) => {
        dispatch({ type: 'ADD_TO_CART', payload: item })
    }
    const removeFromCart = (item: Producto) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }


    return { state, addToCart, removeFromCart, clearCart }
}


export function CartProvider({ children }: { children: React.ReactNode }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

    return (
        <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )

}