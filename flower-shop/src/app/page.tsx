'use client'
import Hero from "@/app/sections/Hero";
import Productos from "./sections/Productos";
import Carrucel from "./components/Carrucel";
import { FiltroProvider } from "./context/filtro";


export default function Home() {

  return (
    <FiltroProvider>
      <Hero />
      <Carrucel />
      <Productos />
    </FiltroProvider>
  );
}
