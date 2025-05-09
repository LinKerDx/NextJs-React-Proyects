'use client'
import Hero from "@/app/sections/Hero";
import Productos from "./sections/Productos";
import Carrucel from "./components/Carrucel";
import { FiltroProvider } from "./context/filtro";
import { ProductosListados } from "@/app/sections/ProductosListados";



export default function Home() {

  return (
    <FiltroProvider>
      <Hero />
      <Carrucel />
      <ProductosListados />
      <Productos />
    </FiltroProvider>
  );
}




