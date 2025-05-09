'use client'
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { ShoppingBag, X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { RemoveFromCart } from './icons/Icons';

// Componente principal de la bolsa de compras
export default function ShoppingCart() {
    const { cart, clearCart, removeFromCart, addToCart, total } = useCart()
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState(cart);
    const [animateIcon, setAnimateIcon] = useState(false);

    // Actualiza los items cuando cambia el prop
    useEffect(() => {
        setItems(cart);
    }, [cart]);

    // Efecto de animación cuando se añade un nuevo item
    /*useEffect(() => {
        if (cartItems.length > items.length) {
            setAnimateIcon(true);
            const timer = setTimeout(() => setAnimateIcon(false), 500);
            return () => clearTimeout(timer);
        }
    }, [cart]);/*/

    // Calcula el total
    //const total = items.reduce((sum, item) => sum + (item.precio_estimado * (item.cantidad || 1)), 0);

    return (
        <div className="fixed top-25 right-5 z-50  ">
            {/* Botón de la bolsa */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="badges p-2 text-blue-text hover:text-red-600 focus:outline-none transition-colors bg-primary-dark rounded-lg cursor-pointer "
                aria-label="Ver carrito de compras"
            >
                <ShoppingBag
                    size={30}
                    className={`${animateIcon ? 'animate-bounce' : ''}`}
                />
                {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-dark text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {items.reduce((sum, item) => sum + (item.cantidad || 1), 0)}
                    </span>
                )}
            </button>

            {/* Menú desplegable */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black opacity-60"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl max-h-96 flex flex-col">
                        {/* Encabezado */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="font-bold  text-blue-text">Mi bolsa de compras</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-blue-text hover:text-blue-text"
                                aria-label="Cerrar"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Lista de productos */}
                        <div className="overflow-y-auto flex-grow">
                            {items.length === 0 ? (
                                <p className="p-4  text-blue-text text-center">Tu bolsa está vacía</p>
                            ) : (
                                <ul className="divide-y divide-gray-100">
                                    {items.map(item => (
                                        <li key={item.id} className="p-4 flex gap-3">
                                            {/* Imagen */}
                                            <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                                                <img
                                                    src={item.imagen}
                                                    alt={item.tipo}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            {/* Detalles */}
                                            <div className="flex-grow min-w-0">
                                                <h3 className="font-medium  text-blue-text truncate">{item.tipo}</h3>
                                                <p className="text-xs  text-blue-text truncate">{item.descripción}</p>
                                                <div className="flex justify-between items-center mt-2">
                                                    <p className="font-semibold text-sm">
                                                        {item.precio_estimado} {item.moneda}
                                                    </p>

                                                    {/* Control de cantidad */}
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => removeFromCart(item)}
                                                            className=" text-blue-text hover:text-primary-dark p-1"
                                                            aria-label="Reducir cantidad"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="text-sm w-5 text-center">{item.cantidad || 1}</span>
                                                        <button
                                                            onClick={() => addToCart(item)}
                                                            className=" text-blue-text hover:text-primary-dark p-1"
                                                            aria-label="Aumentar cantidad"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>


                        {/* botón de limpiar bolsa */}
                        {items.length === 0 ? <></> : (
                            <div className="flex justify-between items-center p-4 border-b">
                                <h2 className="font-bold  text-blue-text">Eliminar todo</h2>
                                <button
                                    onClick={() => clearCart()}
                                    className="text-blue-text hover:text-blue-text cursor-pointer"
                                    aria-label="Cerrar"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>)}


                        {/* Pie con total y botón */}
                        <div className="border-t p-4 bg-gray-50 rounded-b-lg">
                            <div className="flex justify-between mb-3">
                                <span className="font-medium">Total:</span>
                                <span className="font-bold">{total.toFixed(2)} euros</span>
                            </div>
                            <button
                                className="w-full bg-primary-dark hover:bg-primary-dark/90 text-white py-2 rounded-lg font-medium transition-colors"
                            >
                                Finalizar compra
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}