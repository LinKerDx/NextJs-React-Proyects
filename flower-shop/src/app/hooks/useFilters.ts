'use client'

import { useContext } from "react";
import { FiltroContext } from "../context/filtro";
import { ListOfProductos } from "../types/productos";


export function useFilters() {
    const { filters, setFilters } = useContext(FiltroContext)


    const productoFiltrado = (producto: ListOfProductos) => {
        return producto.filter((producto) => {
            return (
                (filters.nivel_cuidado === "todo" || producto.nivel_cuidado === filters.nivel_cuidado) &&
                (producto.precio_estimado >= filters.minimo)
            )
        })

    }
    const productoFiltradoPorCategoriaCactus = (producto: ListOfProductos) => {
        return producto.filter((producto) => {
            return (
                (producto.categoría === "Cactus")
            )
        })
    }
    const productoFiltradoPorCategoriaFlorese = (producto: ListOfProductos) => {
        return producto.filter((producto) => {
            return (
                (producto.categoría === "Flores")
            )
        })
    }
    const productoFiltradoPorCategoriaVariedades = (producto: ListOfProductos) => {
        return producto.filter((producto) => {
            return (
                (producto.categoría === "Variedad")
            )
        })
    }


    const categoríasProductos = [productoFiltradoPorCategoriaCactus, productoFiltradoPorCategoriaFlorese, productoFiltradoPorCategoriaVariedades]

    return { productoFiltrado, categoríasProductos, setFilters, filters }

}
