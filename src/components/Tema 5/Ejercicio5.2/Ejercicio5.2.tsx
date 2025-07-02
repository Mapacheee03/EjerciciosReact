import { useNavigate } from "react-router-dom";
import styles from "./Ejercicio5.2.module.css";

type Producto = {
    nombre: string;
    precio: number;
    descuento: number;
    categoria: string;
};

const productos: Producto[] = [
    { nombre: "iPhone 15", precio: 999, descuento: 10, categoria: "Electrónicos" },
    { nombre: "MacBook Air", precio: 1299, descuento: 15, categoria: "Electrónicos" },
    { nombre: "AirPods Pro", precio: 249, descuento: 20, categoria: "Electrónicos" },
    { nombre: "iPad Air", precio: 599, descuento: 5, categoria: "Electrónicos" },
    { nombre: "Camiseta Premium", precio: 29, descuento: 25, categoria: "Ropa" },
    { nombre: "Jeans Clásicos", precio: 79, descuento: 30, categoria: "Ropa" },
    { nombre: "Chaqueta de Cuero", precio: 199, descuento: 15, categoria: "Ropa" },
    { nombre: "Zapatillas Deportivas", precio: 89, descuento: 20, categoria: "Ropa" },
    { nombre: "Sofá Moderno", precio: 899, descuento: 25, categoria: "Hogar" },
    { nombre: "Mesa de Comedor", precio: 449, descuento: 10, categoria: "Hogar" },
    { nombre: "Lámpara LED", precio: 69, descuento: 15, categoria: "Hogar" },
    { nombre: "Alfombra Persa", precio: 299, descuento: 30, categoria: "Hogar" }
];

function Product({ producto }: { producto: Producto }) {
    const precioFinal = producto.precio * (1 - producto.descuento / 100);
    return (
        <div className={styles.productCard}>
            <h4 className={styles.productName}>{producto.nombre}</h4>
            <p className={styles.productPrice}>Precio: ${producto.precio}</p>
            <p className={styles.productDiscount}>Descuento: {producto.descuento}%</p>
            <p className={styles.productFinalPrice}>
                <strong>Precio final: ${precioFinal.toFixed(2)}</strong>
            </p>
        </div>
    );
}

function Category({ nombre, productos }: { nombre: string; productos: Producto[] }) {
    return (
        <div className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{nombre}</h2>
            <div className={styles.productsGrid}>
                {productos.map((prod) => (
                    <Product key={prod.nombre} producto={prod} />
                ))}
            </div>
        </div>
    );
}

export default function TiendaDeProductos() {
    const navigate = useNavigate();
    const categorias = Array.from(
        new Set(productos.map((p) => p.categoria))
    );

    return (
        <div className={styles.storeContainer}>
            <button onClick={() => navigate("/")} className={styles.backButton}>
                Regresar
            </button>
            <h1 className={styles.storeTitle}>Tienda de Productos</h1>
            {categorias.map((cat) => (
                <Category
                    key={cat}
                    nombre={cat}
                    productos={productos.filter((p) => p.categoria === cat)}
                />
            ))}
        </div>
    );
}
