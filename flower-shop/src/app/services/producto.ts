'use client'
import { useState } from "react";

import Cactáceas from "@/app/data/cactus.json";
import Flores from "@/app/data/flores.json";
import Variedad from "@/app/data/variedad.json";
import { ListOfProductos } from "../types/productos";

export function useGetData() {
    const Productos = [
        {
            vid: "/assets/cactáceas.mp4",
            title: "Cactáceas",
            link: "/categoría/cactáceas",
            data: Cactáceas,
        },
        {
            vid: "/assets/variedad.mp4",
            title: "Variedad",
            data: Variedad,
            link: "/categoría/variedad"
        },
        {
            vid: "/assets/floral.mp4",
            title: "Florales",
            link: "/categoría/floral",
            data: Flores,
        },
    ]
    const [producto, setProducto] = useState<ListOfProductos>([])



    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget as HTMLAnchorElement;
        const productoSeleccionado = Productos.find((producto) => producto.link === target.getAttribute("href"));
        if (productoSeleccionado) {
            setProducto(productoSeleccionado.data);
        }
    };

    return { Productos, handleClick, producto }
}