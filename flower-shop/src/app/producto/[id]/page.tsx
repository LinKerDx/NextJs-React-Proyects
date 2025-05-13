'use client'
import SectionContainer from "@/app/components/SectionContainer"
import ProductoIndividual from "@/app/sections/ProductoIndividual"
import { DatosProducto } from "@/app/services/producto"

export default function Product({ params }: { params: { id: string } }) {
    const { id } = params
    console.log("id:", id)
    const { producto } = DatosProducto()
    const productoInd = producto.filter((i) => i.id === Number(id));
    console.log("Producto:", productoInd)


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