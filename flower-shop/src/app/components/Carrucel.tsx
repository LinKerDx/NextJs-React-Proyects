/* eslint-disable @next/next/no-img-element */
'use client'
import { useGetData } from "../services/producto"
import SectionContainer from "./SectionContainer"

export default function Carrucel() {
    const { Productos } = useGetData()

    const firstlineCactus = Productos[0].data.slice(0, 3)
    const firstlineFlowers = Productos[1].data.slice(0, 3)
    const firstlineVariety = Productos[2].data.slice(0, 2)


    const secondlineCactus = Productos[0].data.slice(4, 7)
    const secondlineFlowers = Productos[1].data.slice(4, 7)
    const secondlineVariety = Productos[2].data.slice(3, 6)


    return (
        <SectionContainer>
            <div className="flex flex-col items-center justify-center bg-primary w-full py-10  overflow-hidden gap-10 ">
                <div className="overflow-hidden flex-rows w-[110%] -rotate-2 mask-y-from-90% mask-y-to-110% bg-gradient-to-b from-[#FF90BB] to-[#FFC1DA] py-3 ">
                    <article className="flex flex-rows animate-movimientocinta-mobile md:animate-movimientocinta  gap-15">
                        {firstlineCactus.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                        {firstlineFlowers.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                        {firstlineVariety.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                    </article>
                </div>
                <div className="overflow-hidden flex-rows w-[110%] -rotate-2 mask-y-from-90% mask-y-to-110% bg-gradient-to-b from-[#FF90BB] to-[#FFC1DA] py-3 ">
                    <article className="flex flex-rows animate-movimientocintareversa-mobile md:animate-movimientocintareversa gap-15">
                        {secondlineCactus.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                        {secondlineFlowers.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                        {secondlineVariety.map((producto, index) => (<img key={index} className="size-13 md:size-20 rounded-lg animate-swing" src={producto.imagen} alt={`imagen de ${producto.tipo}`} />))}
                    </article>
                </div>
            </div>
        </SectionContainer>
    )
}