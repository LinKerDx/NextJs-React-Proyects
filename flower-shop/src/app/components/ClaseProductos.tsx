'use client'
import Link from "next/link";
import { Productos } from "../types/productos";
import SectionContainer from "./SectionContainer";


export default function ClaseProductos({ Productos }: { Productos: Productos[] }) {
    return (
        <SectionContainer>
            <div className="flex flex-col items-center justify-center bg-primary mask-y-from-90% mask-y-to-110%">
                <h1 className="text-4xl font-bold ">Productos</h1>
                <p className="mt-4 text-lg ">Aquí puedes ver todos nuestros productos.</p>
                <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        Productos.map((producto, index) => (
                            <div key={index} className="flex flex-col  items-center justify-center mt-4">
                                <Link href={`/categoria/${producto.link}`
                                } className="flex flex-col items-center justify-center">
                                    <h2 className="mt-2 text-xl font-semibold ">{producto.title}</h2>
                                    <video src={producto.vid} className="object-cover h-[500px]" preload="auto" loop autoPlay />
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </div>
        </SectionContainer>
    )
}