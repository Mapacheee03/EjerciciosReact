import styles from './Ejercicio2.1.module.css';

export default function TarjetaDePresentacion() {
    const nombreCompleto = "Orlando Grajeda";
    const tituloProfesional = "Desarrollador FrontEnd";
    const descripcionPersonal = "Desarrollador apasionado con 1 año de experiencia en Angular y Node.js";
    const email = "pablobusso8@gmail.com";
    const telefono = "+52 644 451 2511";
    const ubicacion = "Pueblo Yaqui, Son";

    return (
        <div className={styles.tarjeta}>
            <h1 className={styles.nombre}>{nombreCompleto}</h1>
            <h2 className={styles.titulo}>{tituloProfesional}</h2>
            <p className={styles.descripcion}>{descripcionPersonal}</p>

            <ul className={styles.lista}>
                <li className={styles.item}>Email: {email}</li>
                <li className={styles.item}>Teléfono: {telefono}</li>
                <li className={styles.item}>Ubicación: {ubicacion}</li>
            </ul>

            <footer className={styles.footer}>
                <small>&copy; {new Date().getFullYear()}</small>
            </footer>
        </div>
    );
}
