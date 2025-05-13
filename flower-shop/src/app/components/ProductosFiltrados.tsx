import { DatosProducto } from "../services/producto";
import NoEncuentraProductos from "./NoEncuentraProductos";
import ProductCard from "./ProductCard";


export function ProductosFiltrados() {
    const { productosFiltrados } = DatosProducto();
    const tieneProductosFiltrados = productosFiltrados.length > 0;

    return (
        <>
            {
                tieneProductosFiltrados
                    ? productosFiltrados.map(item => { return <ProductCard key={item.id} item={item} /> })
                    : <NoEncuentraProductos />
            }
        </>
    )
}