import styles from './Ejercicio3.1.module.css';
import { useNavigate } from "react-router-dom";


type Pelicula = {
    titulo: string;
    año: number;
};

export default function GeneradordeHTML() {
    const navigate = useNavigate();

    const peliculas: Pelicula[] = [
        { titulo: "El Padrino", año: 1972 },
        { titulo: "Pulp Fiction", año: 1994 },
        { titulo: "El Señor de los Anillos", año: 2001 },
        { titulo: "Matrix", año: 1999 },
        { titulo: "Inception", año: 2010 }
    ];

    const sumaAnios = peliculas.reduce((total, peli) => total + peli.año, 0);
    const promedio = Math.round(sumaAnios / peliculas.length);

    return (
        <div className={styles.container}>
            <button onClick={() => navigate("/")} className={styles.backButton}>
                Regresar
            </button>
            <h2 className={styles.title}>Mis 5 películas favoritas</h2>
            <hr className={styles.separator} />
            <ul className={styles.list}>
                {peliculas.map((peli, index) => (
                    <li key={index} className={styles.item}>
                        {peli.titulo} ({peli.año})
                    </li>
                ))}
            </ul>
            <br />
            <strong className={styles.average}>Promedio de años: {promedio}</strong>
        </div>
    );
}
