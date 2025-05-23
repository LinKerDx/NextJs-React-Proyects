/* eslint-disable @next/next/no-img-element */

import SectionContainer from "../components/SectionContainer"


export default function Hero() {

    return (
        <SectionContainer>
            <div className="relative mb-15">
                {/* Círculo decorativo superior izquierdo */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#ffc0d0] opacity-60 z-10"></div>


                <div className="relative flex flex-col md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-2 overflow-hidden ">
                    {/* Gradiente overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f291ab]/20 to-transparent pointer-events-none z-10"></div>

                    {/* Máscara ondulada en la parte inferior */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
                        <svg
                            className="relative block w-full text-primary"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            style={{ height: '50px' }}
                        >
                            <path
                                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>

                    <img
                        src="/Hero1.webp"
                        alt="Eliza-chan acomodando flores"
                        className="w-full h-full object-cover aspect-[9/16] transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
                    />
                    <video
                        src="/assets/Hero4.webm"
                        className="hidden md:block w-full h-full object-cover col-span-3 aspect-video transition-all duration-300 hover:brightness-110 "
                        autoPlay
                        loop
                        muted
                    />
                    <img
                        src="/Hero3.webp"
                        alt="imagen de un arbol de cerezo"
                        className="hidden lg:block w-full h-full object-cover col-span-1 aspect-[9/16] transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
                    />
                </div>

                <div className=" md:absolute md:left-1/2  md:-bottom-7 md:-translate-x-1/2 bg-gradient-to-b from-primary to-primary-dark rounded-b-xl  py-4 px-6 md:px-8 shadow-lg w-[90%] md:w-[500px] mx-auto text-center md:mt-0 z-30">
                    <p className="text-black font-bold text-sm md:text-2xl tracking-wide">
                        Cada arreglo cuenta una historia
                    </p>
                </div>
            </div>
        </SectionContainer>
    )

}