import { Productos } from "../types/productos";


export default function ClaseProductos({ Productos, handleClick }: { Productos: Productos[], handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-primary">
            <h1 className="text-4xl font-bold ">Productos</h1>
            <p className="mt-4 text-lg ">Aquí puedes ver todos nuestros productos.</p>
            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    Productos.map((producto, index) => (
                        <div key={index} className="flex flex-col  items-center justify-center mt-4">
                            <a href={producto.link} className="flex flex-col items-center justify-center" onClick={handleClick}>
                                <h2 className="mt-2 text-xl font-semibold ">{producto.title}</h2>
                                <video src={producto.vid} className="object-cover h-[500px]" preload="auto" loop autoPlay />
                            </a>
                        </div>
                    ))
                }

            </div>
        </div>

    )
}