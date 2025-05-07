'use client'
import { createContext, ReactNode } from 'react'

interface FiltroContextType {
    nivel_cuidado: string
    minimo: number
}

export const FiltroContext = createContext<FiltroContextType | undefined>(undefined)

export function FiltroProvider({ children }: { children: ReactNode }) {

    return (
        <FiltroContext.Provider value={{ nivel_cuidado: 'todo', minimo: 0 }} >
            {children}
        </FiltroContext.Provider>
    )
}