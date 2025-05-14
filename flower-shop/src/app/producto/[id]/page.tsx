'use client'
import SectionContainer from "@/app/components/SectionContainer"
import ProductoIndividual from "@/app/sections/ProductoIndividual"
import { DatosProducto } from "@/app/services/producto"
import { useParams } from "next/navigation";

export default function ProductPage() {
    const params = useParams(); // ✅ funciona en cliente
    const productoId = Number(params.id);

    const { producto } = DatosProducto()
    const productoInd = producto.filter((i) => i.id === productoId);


    return (
        <SectionContainer>
            {
                productoInd.map(
                    (item) => {
                        return <ProductoIndividual key={item.id} item={item} />
                    }
                )
            }

        </SectionContainer>
    )
}