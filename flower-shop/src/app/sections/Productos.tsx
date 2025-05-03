'use client'
import { useState } from "react";
import Cactáceas from "@/app/data/cactus.json";
import Flores from "@/app/data/flores.json";
import Variedad from "@/app/data/variedad.json";
import { ListOfProductos } from "@/app/types/productos";
import ClaseProductos from "@/app/components/ClaseProductos";



export default function Productos() {

    const Productos = [
        {
            vid: "/assets/cactáceas.mp4",
            title: "Cactáceas",
            link: "/plantas/cactaceas",
            data: Cactáceas,
        },
        {
            vid: "/assets/variedad.mp4",
            title: "Variedad",
            link: "/plantas/variedad",
            data: Variedad,
        },
        {
            vid: "/assets/floral.mp4",
            title: "Florales",
            link: "/plantas/flores",
            data: Flores,
        },
    ]
    const [producto, setProducto] = useState<ListOfProductos>([])
    console.log(producto);



    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget as HTMLAnchorElement;
        const productoSeleccionado = Productos.find((producto) => producto.link === target.getAttribute("href"));
        if (productoSeleccionado) {
            setProducto(productoSeleccionado.data);
        }
    };

    return (
        <ClaseProductos Productos={Productos} handleClick={handleClick} />
    );
}