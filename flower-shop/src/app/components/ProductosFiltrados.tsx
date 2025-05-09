import { useCart } from "../hooks/useCart";
import { GetData } from "../services/producto";
import { Producto } from "../types/productos";
import { AddToCartIcon, RemoveFromCart } from "./icons/Icons";
import { NoEncuentra } from "./NoEncuentra";

/* eslint-disable @next/next/no-img-element */
export function ProductosFiltrados() {
    const { productosFiltrados } = GetData();
    const tieneProductosFiltrados = productosFiltrados.length > 0;

    const { addToCart, cart, removeFromCart } = useCart()

    const checkProducto = (item: Producto) => {
        return cart.some((i) => i.id === item.id)
    }


    return (
        <>
            {
                tieneProductosFiltrados ?

                    (
                        productosFiltrados.map(item => {
                            const isInCart = checkProducto(item)
                            console.log(item)
                            return (
                                <div key={item.id} className="flex flex-col items-center justify-center mt-4">
                                    <article className="bg-primary-dark rounded-xl shadow-md overflow-hidden w-72 h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ">
                                        {/* Imagen con contenedor de proporción fija */}
                                        <div className="relative pt-[100%] overflow-hidden bg-gray-100">
                                            <img
                                                src={item.imagen}
                                                alt={item.tipo}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            {/* Badge de categoría */}
                                            <span className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                                                {item.categoría}
                                            </span>
                                        </div>

                                        {/* Contenido del producto */}
                                        <div className="p-5 flex flex-col flex-grow">
                                            <h2 className="font-bold text-xl text-blue-text mb-2 line-clamp-2">{item.tipo}</h2>
                                            <p className="text-blue-text text-sm mb-4 line-clamp-3">{item.descripción}</p>

                                            {/* Nivel de cuidado */}
                                            <div className="flex items-center mb-4 mt-auto">
                                                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${item.nivel_cuidado.includes("Muy bajo") ? "bg-green-300" :
                                                    item.nivel_cuidado.includes("Bajo") ? "bg-green-500" :
                                                        item.nivel_cuidado.includes("Moderado") ? "bg-yellow-500" :
                                                            "bg-red-500"
                                                    }`}></span>
                                                <span className="text-xs text-blue-text">{item.nivel_cuidado}</span>
                                            </div>

                                            {/* Precio y botón */}
                                            <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100 group">
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-blue-text">Precio</span>
                                                    <span className="font-semibold text-lg">{item.precio_estimado} <small className="text-blue-text">{item.moneda}</small></span>
                                                </div>
                                                <button style={{ backgroundColor: isInCart ? 'black' : '#6de06d' }} onClick={() => {
                                                    console.log("Item:", item);
                                                    return (isInCart ? removeFromCart(item) : addToCart(item))
                                                }
                                                } className="cursor-pointer group-hover:animate-elastic-ultrasoft text-white text-sm rounded-lg transition-colors p-1">
                                                    {isInCart ? <RemoveFromCart /> : <AddToCartIcon />}
                                                </button>
                                                <button className="bg-primary group-hover:bg-red-600 cursor-pointer group-hover:animate-elastic-ultrasoft text-white text-sm py-2 px-4 rounded-lg transition-colors">
                                                    Ver detalles
                                                </button>
                                            </div>
                                        </div>
                                    </article >
                                </div >
                            )
                        })
                    )
                    : <NoEncuentra />

            }
        </>
    )
}