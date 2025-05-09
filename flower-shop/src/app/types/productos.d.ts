export interface Producto {
    id: number;
    tipo: string;
    descripción: string;
    maceta: string;
    opciones_maceta: string[];
    nivel_cuidado: string;
    precio_estimado: number;
    imagen: string;
    moneda: string,
    categoría: string;
    cantidad?: number;
}
type Productos = {
    vid: string;
    title: string;
    link: string;
    data: ListOfProductos;
}

export interface FiltersState {
    nivel_cuidado: string;
    minimo: number;
}

export interface FiltroContextType {
    filters: { nivel_cuidado: string, minimo: number };
    setFilters: (filters: { nivel_cuidado: string, minimo: number }) => void
}

export type ListOfProductos = Producto[];

export interface Props {
    producto: ListOfProductos;
    setProducto: Productos;
    handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}


export interface CartContextType {
    cart: ListOfProductos
    addToCart: (item: Producto) => void
    removeFromCart: (item: Producto) => void
    clearCart: () => void
}