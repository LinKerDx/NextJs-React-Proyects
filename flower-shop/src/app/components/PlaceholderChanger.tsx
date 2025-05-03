/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
export default function PlaceholderChanger() {
    const placeholders = [
        { text: "Busca cactáceas", img: "/imgs/cactáceas/cactácea.svg" },
        { text: "Encuentra flores", img: "/imgs/flores/flores.svg" },
        { text: "Comprar plantas", img: "/imgs/variedad/variedad.svg" },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % placeholders.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [placeholders.length]);

    const current = placeholders[index];

    return (
        <>
            <img src={current.img} alt="icono" className="w-6 h-6" />
            <input
                type="text"
                placeholder={current.text}
                className="border p-2 rounded"
            />
        </>
    );
};

