'use client'
import ClaseProductos from "@/app/components/ClaseProductos";
import { GetData } from "../services/producto";



export default function Productos() {
    const { Productos } = GetData();
    return (
        <ClaseProductos Productos={Productos} />
    );
}