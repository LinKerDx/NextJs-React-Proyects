'use client'
import { useState } from "react";

import Cactáceas from "@/app/data/cactus.json";
import Flores from "@/app/data/flores.json";
import Variedad from "@/app/data/variedad.json";
import { ListOfProductos } from "../types/productos";

import ProductosIniciales from "@/app/mocks/productos.json";

export function GetData() {
    const [producto] = useState<ListOfProductos>(ProductosIniciales)
    const [filters, setFilters] = useState({
        nivel_cuidado: "todo",
        minimo: 0,
    })

    const productoFiltrado = (producto: ListOfProductos) => {
        return producto.filter((producto) => {
            return (
                (filters.nivel_cuidado === "todo" || producto.nivel_cuidado === filters.nivel_cuidado) &&
                (producto.precio_estimado >= filters.minimo)
            )
        })

    }
    const productosFiltrados = productoFiltrado(producto)


    const Productos = [
        {
            vid: "/assets/cactaceas.mp4",
            title: "Cactaceas",
            link: "cactaceas",
            data: Cactáceas,
        },
        {
            vid: "/assets/variedad.mp4",
            title: "Variedad",
            link: "variedad",
            data: Variedad
        },
        {
            vid: "/assets/floral.mp4",
            title: "Florales",
            link: "floral",
            data: Flores,
        },
    ]

    return { Productos, productosFiltrados, setFilters }
}