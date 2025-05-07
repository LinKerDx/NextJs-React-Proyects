'use client'
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { ShoppingBag, X, Trash2, Plus, Minus } from 'lucide-react';

// Componente principal de la bolsa de compras
export default function ShoppingCart({ cartItems = [], onRemoveItem, onUpdateQuantity }) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState(cartItems);
    const [animateIcon, setAnimateIcon] = useState(false);

    // Actualiza los items cuando cambia el prop
    useEffect(() => {
        setItems(cartItems);
    }, [cartItems]);

    // Efecto de animación cuando se añade un nuevo item
    useEffect(() => {
        if (cartItems.length > items.length) {
            setAnimateIcon(true);
            const timer = setTimeout(() => setAnimateIcon(false), 500);
            return () => clearTimeout(timer);
        }
    }, [cartItems.length, items.length]);

    // Calcula el total
    const total = items.reduce((sum, item) => sum + (item.precio_estimado * (item.quantity || 1)), 0);

    // Elimina un item del carrito
    const handleRemove = (id) => {
        if (onRemoveItem) onRemoveItem(id);
        else setItems(items.filter(item => item.id !== id));
    };

    // Actualiza la cantidad de un item
    const handleUpdateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;

        if (onUpdateQuantity) onUpdateQuantity(id, newQuantity);
        else {
            setItems(items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    // Ejemplo de datos de prueba si no hay items
    if (items.length === 0) {
        setItems([
            {
                id: 1,
                tipo: "Cactus globular",
                descripción: "Cactus barril redondo con espinas doradas",
                precio_estimado: 15.50,
                moneda: "euros",
                imagen: "/api/placeholder/80/80",
                quantity: 1,
                categoría: "Cactus"
            },
            {
                id: 4,
                tipo: "Opuntia (Nopal)",
                descripción: "Cactus de paletas con segmentos planos ovalados y pequeñas espinas",
                maceta: "Maceta cilíndrica plateada",
                opciones_maceta: [
                    "Plateado",
                    "Cobre",
                    "Dorado",
                    "Bronce"
                ],
                nivel_cuidado: "Bajo mantenimiento",
                precio_estimado: 22.50,
                moneda: "euros",
                imagen: "imgs/cactaceas/4.webp",
                categoría: "Cactus"

            }
        ]);
    }

    return (
        <div className="relative z-50">
            {/* Botón de la bolsa */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-gray-700 hover:text-primary-dark focus:outline-none transition-colors"
                aria-label="Ver carrito de compras"
            >
                <ShoppingBag
                    size={24}
                    className={`${animateIcon ? 'animate-bounce' : ''}`}
                />
                {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-dark text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {items.reduce((sum, item) => sum + (item.quantity || 1), 0)}
                    </span>
                )}
            </button>

            {/* Menú desplegable */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl max-h-96 flex flex-col">
                        {/* Encabezado */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="font-bold text-gray-800">Mi bolsa de compras</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                                aria-label="Cerrar"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Lista de productos */}
                        <div className="overflow-y-auto flex-grow">
                            {items.length === 0 ? (
                                <p className="p-4 text-gray-500 text-center">Tu bolsa está vacía</p>
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
                                                <h3 className="font-medium text-gray-800 truncate">{item.tipo}</h3>
                                                <p className="text-xs text-gray-500 truncate">{item.descripción}</p>
                                                <div className="flex justify-between items-center mt-2">
                                                    <p className="font-semibold text-sm">
                                                        {item.precio_estimado} {item.moneda}
                                                    </p>

                                                    {/* Control de cantidad */}
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => handleUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                                                            className="text-gray-500 hover:text-primary-dark p-1"
                                                            aria-label="Reducir cantidad"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="text-sm w-5 text-center">{item.quantity || 1}</span>
                                                        <button
                                                            onClick={() => handleUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                                                            className="text-gray-500 hover:text-primary-dark p-1"
                                                            aria-label="Aumentar cantidad"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Botón eliminar */}
                                            <button
                                                onClick={() => handleRemove(item.id)}
                                                className="text-gray-400 hover:text-red-500 self-start p-1"
                                                aria-label="Eliminar"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

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