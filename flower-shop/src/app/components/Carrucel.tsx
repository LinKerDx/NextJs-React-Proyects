/* eslint-disable @next/next/no-img-element */
'use client'
import { DatosProducto } from "../services/producto"
import SectionContainer from "./SectionContainer"

export default function Carrucel() {

    const { Categorías } = DatosProducto()

    const ProductosCactus = Categorías[0]
    const ProductosFlores = Categorías[1]
    const ProductosVariedad = Categorías[2]

    const firstlineCactus = ProductosCactus.slice(0, 3)
    const firstlineFlowers = ProductosFlores.slice(0, 3)
    const firstlineVariety = ProductosVariedad.slice(0, 2)


    const secondlineCactus = ProductosCactus.slice(4, 7)
    const secondlineFlowers = ProductosFlores.slice(4, 7)
    const secondlineVariety = ProductosVariedad.slice(3, 6)


    return (
        <SectionContainer>
            <div className="flex flex-col items-center justify-center bg-primary w-full py-10  overflow-hidden gap-10 ">
                <div className="overflow-hidden flex-rows w-[110%] -rotate-2 mask-y-from-90% mask-y-to-110% bg-gradient-to-b from-[#FF90BB] to-[#FFC1DA] py-3 ">
                    <article className="flex flex-rows animate-blob animate-movimientocinta-mobile md:animate-movimientocinta lg:animate-movimientocinta-compu gap-15 lg:gap-30">
                        {firstlineCactus.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                        {firstlineFlowers.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                        {firstlineVariety.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                    </article>
                </div>
                <div className="overflow-hidden flex-rows w-[110%] -rotate-2 mask-y-from-90% mask-y-to-110% bg-gradient-to-b from-[#FF90BB] to-[#FFC1DA] py-3 ">
                    <article className="flex flex-rows animate-movimientocintareversa-mobile md:animate-movimientocintareversa lg:animate-movimientocintareversa-compu gap-15 lg:gap-30">
                        {secondlineCactus.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                        {secondlineFlowers.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                        {secondlineVariety.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                    </article>
                </div>
            </div>
        </SectionContainer>
    )
}