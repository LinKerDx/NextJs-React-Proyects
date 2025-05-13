'use client'
import { useState } from "react";
import { ListOfProductos, Producto } from "../types/productos";

import ProductosIniciales from "@/app/mocks/productos.json";
import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";

export function DatosProducto() {
    const { cart } = useCart()
    const [producto] = useState<ListOfProductos>(ProductosIniciales)
    const { setFilters, productoFiltrado, categoríasProductos } = useFilters()
    const productosFiltrados = productoFiltrado(producto)
    const productosCactus = categoríasProductos[0](producto)
    const productosFlores = categoríasProductos[1](producto)
    const productosVariedad = categoríasProductos[2](producto)
    
    const checkProducto = (item: Producto) => {
        return cart.some((i) => i.id === item.id)
    }

    const Categorías = [productosCactus, productosFlores, productosVariedad]

    return { producto, productosFiltrados, setFilters, Categorías, checkProducto }
}