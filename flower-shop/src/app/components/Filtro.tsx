'use client';
import { useId, useState } from "react";

export function Filtro({ onChange }: { onChange: (filters: { categoría: string; minimo: number }) => void }) {

    const [precioMin, setPrecioMin] = useState(0)
    const minPriceFilterId = useId();
    const careLevelFilterId = useId();

    const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrecioMin(e.target.value);
        onChange(prevState => ({
            ...prevState,
            minimo: e.target.value,
        }));
    };

    const handleSelectCare = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(prevState => ({
            ...prevState,
            nivel_cuidado: e.target.value,
        }));
    };

    return (
        <section className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Filtros</h1>
            <div className="flex flex-row gap-4 md:gap-8">
                <div className="flex flex-rows gap-2 items-center">
                    <label htmlFor={minPriceFilterId} className="text-lg font-semibold">Precio Mínimo</label>
                    <input onChange={handleChangeMinPrice} type="range" id={minPriceFilterId} min='0' max='100' className="border rounded" />
                    <span>${precioMin}</span>
                </div>
                <div className="flex flex-rows gap-2 items-center">
                    <label htmlFor={careLevelFilterId} className="text-lg font-semibold">Tipo de Cuidado</label>
                    <select onChange={handleSelectCare} id={careLevelFilterId} className="p-2 border rounded">
                        <option value="todo">Todo</option>
                        <option value="Bajo">Bajo</option>
                        <option value="Moderado">Moderado</option>
                        <option value="Medio">Medio</option>
                        <option value="Alto (flores cortadas)">Alto</option>
                    </select>
                </div>
            </div>
        </section>
    );
}