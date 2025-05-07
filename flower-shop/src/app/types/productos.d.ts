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
}
type Productos = {
    vid: string;
    title: string;
    link: string;
    data: ListOfProductos;
}


export type ListOfProductos = Producto[];

export interface Props {
    producto: ListOfProductos;
    setProducto: Productos;
    handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
