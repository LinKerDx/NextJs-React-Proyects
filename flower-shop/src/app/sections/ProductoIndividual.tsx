/* eslint-disable @next/next/no-img-element */

import { AddToCartIcon, RemoveFromCart } from "../components/icons/Icons"
import { useCart } from "../hooks/useCart"
import { DatosProducto } from "../services/producto"
import { Producto } from "../types/productos"
import { CreditCard } from "lucide-react";
import ImprovedBreadcrumb from "../components/BreadCrumb";
import ProductosRecomendados from "./ProductosRecomendados";

export default function ProductoIndividual({ item }: { item: Producto }) {
    const { checkProducto } = DatosProducto()
    const { addToCart, removeFromCart } = useCart()

    console.log(item)
    const isInCart = checkProducto(item)


    return (<div key={item.id} className="flex flex-col justify-around">
        {/* Header con navegación y botones */}
        <header className="space-y-4">
            {/* Breadcrumb */}
            <ImprovedBreadcrumb />

        </header>

        {/* Contenido principal */}
        <main className="flex flex-row items-center gap-10 mt-6">
            {/* Imagen y descripción corta */}
            <div className="flex flex-col gap-6 items-center">
                <img src={item.imagen} alt={item.tipo} className="w-72 h-72 object-cover border-4 border-primary-dark rounded" />
                <p className="text-sm text-center text-gray-700">{item.maceta} y distintos colores</p>
            </div>

            {/* Detalles del producto */}
            <aside className="max-w-md">
                <h1 className="text-2xl font-bold">{item.tipo}</h1>
                <p className="text-xl text-green-600 mt-1">
                    {item.precio_estimado} <small className="text-gray-500">{item.moneda}</small>
                </p>

                <section className="mt-4">
                    <h2 className="font-semibold text-gray-800">Información del producto</h2>
                    <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">
                        {item.descripción}
                    </p>
                </section>

                {/* Botón de carrito */}
                <button
                    style={{ backgroundColor: isInCart ? 'black' : '#6de06d' }}
                    onClick={() => isInCart ? removeFromCart(item) : addToCart(item)}
                    className="mt-4 flex items-center justify-center gap-2 text-white text-sm rounded-lg transition-colors p-2 hover:opacity-90"
                >
                    {isInCart ? <RemoveFromCart /> : <AddToCartIcon />}
                    {isInCart ? 'Quitar del carrito' : 'Agregar al carrito'}
                </button>
                <button
                    className={`mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium p-2 rounded-lg }`}
                    onClick={() => alert("Procesando pago...")}
                >
                    <CreditCard
                        size={20}
                    />
                    <span >
                        Proceder al pago
                    </span>
                </button>
            </aside>
        </main>
        <footer>
            <ProductosRecomendados productoActualId={item.id} categoria={item.categoría} />
        </footer>
    </div>

    )
}