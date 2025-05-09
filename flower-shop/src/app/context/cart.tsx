'use client'

import { useState, createContext } from "react"
import { CartContextType, Producto } from "../types/productos"

export const CartContext = createContext<CartContextType>({
    cart: [],
    total: 0,
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
})
export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState()
    const [total, setTotal] = useState(0)

    const addToCart = (item: Producto) => {
        //verificar si ya está en el carrito
        const itemInCartIndex = cart.findIndex((i) => i.id === item.id)
        if (itemInCartIndex !== -1) {
            //si ya está en el carrito, aumentar la cantidad
            const newCart = structuredClone(cart)
            newCart[itemInCartIndex].cantidad += 1
            return setCart(newCart)
        }
        //si no está en el carrito, agregarlo
        setCart((prevState) => ([...prevState, { ...item, cantidad: 1 }]))
        setTotal((prev) => prev + item.precio_estimado)
    }

    const removeFromCart = (item: Producto) => {
        setCart((prev) => prev.filter((i) => i.id !== item.id))
        setTotal((prev) => prev - item.precio_estimado)
    }

    const clearCart = () => {
        setCart([])
        setTotal(0)
    }

    return (
        <CartContext.Provider value={{ cart, total, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )

}