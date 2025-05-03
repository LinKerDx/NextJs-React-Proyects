import Hero from "@/app/sections/Hero";
import Productos from "./sections/Productos";
import Carrucel from "./components/Carrucel";


export default function Home() {
  return (
    <>
      <Hero />
      <Carrucel />
      <Productos />
    </>
  );
}
