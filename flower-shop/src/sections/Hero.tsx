/* eslint-disable @next/next/no-img-element */

export default function Hero() {

    return (
        <section className="relative ">
            <div
                className="flex flex-col md:p-2  md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-1 "
            >
                <img
                    src="/Hero1.webp"
                    alt="Eliza-chan acomodando flores"
                    className="Eli-chan object-fill lg:col-span-1  aspect-[9/16] "
                />
                <img
                    src="/Hero2.gif"
                    alt="imagen de una persona acomodando flores"
                    className="object-fill hidden md:inline-flex col-span-3 aspect-video"
                />
                <img
                    src="/Hero3.webp"
                    alt="imagen de interpretación del pensamiento en forma de cerebro"
                    className="object-fill hidden lg:inline-flex col-span-1 aspect-[9/16] "
                />
                <div
                    className="md:absolute place-self-center md:-bottom-5 text-sm md:text-3xl bg-[#ffffff] h-[63px]  md:w-[500px] flex flex-rows justify-center items-center"
                >
                    <p className="text-center dark:text-[#000000] font-bold text-[10px] md:text-3xl">
                        Cada arreglo cuenta una historia
                    </p>
                </div>

            </div>
        </section>
    )

}