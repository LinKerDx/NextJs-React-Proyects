
'use client';
import ProductCard from "@/app/components/ProductCard";
import SectionContainer from "@/app/components/SectionContainer"
import { DatosProducto } from "@/app/services/producto";

export default function Page({
    params
}: {
    params: { id: string }
}) {
    const { id } = params;
    const productoId = Number(id);
    const { Categorías } = DatosProducto()
    const categoría = Categorías[productoId]

    return (
        <SectionContainer>
            <div className="flex flex-col items-center justify-center mt-20 gap-10 w-full">
                <h1 className="text-3xl font-bold">Cactus</h1>
                <div className="responsivo-grid">
                    {categoría.map((item) => {
                        return (
                            <ProductCard key={item.id} item={item} />
                        )
                    })}
                </div>
            </div>
        </SectionContainer>
    )
}