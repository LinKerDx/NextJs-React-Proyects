import { FiltroProvider } from "@/app/context/filtro";
import { ProductosListados } from "@/app/sections/ProductosListados";


export default function ProductosLista() {
    return (
        <FiltroProvider>
            <ProductosListados />
        </FiltroProvider>
    )
}

