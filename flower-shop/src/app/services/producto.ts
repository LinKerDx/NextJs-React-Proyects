'use client'
import { useState } from "react";
import Cactáceas from "@/app/data/cactus.json";
import Flores from "@/app/data/flores.json";
import Variedad from "@/app/data/variedad.json";
import { ListOfProductos } from "../types/productos";

import ProductosIniciales from "@/app/mocks/productos.json";
import { useFilters } from "../hooks/useFilters";

export function GetData() {
    const [producto] = useState<ListOfProductos>(ProductosIniciales)
    const { setFilters, productoFiltrado } = useFilters()
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