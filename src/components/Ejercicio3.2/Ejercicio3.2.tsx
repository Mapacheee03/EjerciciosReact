import styles from './Ejercicio3.2.module.css';

const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417, genero: "Realismo mágico" },
    { titulo: "1984", autor: "George Orwell", paginas: 328, genero: "Distopía" },
    { titulo: "El Quijote", autor: "Miguel de Cervantes", paginas: 863, genero: "Clásico" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 249, genero: "Distopía" },
    { titulo: "Pedro Páramo", autor: "Juan Rulfo", paginas: 124, genero: "Realismo mágico" },
    { titulo: "Dune", autor: "Frank Herbert", paginas: 688, genero: "Ciencia ficción" }
];

export default function ProcesadorDeDatosComplejos() {
    const totalPaginas = libros.reduce((acc, libro) => acc + libro.paginas, 0);

    const promedioPaginas = totalPaginas / libros.length;

    const conteoGeneros: { [key: string]: number } = {};
    libros.forEach(libro => {
        if (conteoGeneros[libro.genero]) {
            conteoGeneros[libro.genero]++;
        } else {
            conteoGeneros[libro.genero] = 1;
        }
    });

    let generoMasComun = "";
    let max = 0;
    Object.keys(conteoGeneros).forEach(genero => {
        if (conteoGeneros[genero] > max) {
            max = conteoGeneros[genero];
            generoMasComun = genero;
        }
    });

    const recomendaciones = libros.filter(libro => libro.genero === generoMasComun);

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Lista de Libros</h2>
            <ul className={styles.list}>
                {libros.map((libro, idx) => (
                    <li key={idx} className={styles.item}>
                        <strong>{libro.titulo}</strong> - {libro.autor} ({libro.paginas} páginas, {libro.genero})
                    </li>
                ))}
            </ul>
            <article className={styles.stats}>
                <h3>Estadísticas</h3>
                <p>Total de páginas: {totalPaginas}</p>
                <p>Promedio de páginas: {promedioPaginas.toFixed(2)}</p>
                <p>Género más común: {generoMasComun}</p>
            </article>
            <article className={styles.recommendations}>
                <h3>Recomendaciones ({generoMasComun})</h3>
                <ul>
                    {recomendaciones.map((libro, idx) => (
                        <li key={idx}>{libro.titulo} de {libro.autor}</li>
                    ))}
                </ul>
            </article>
        </section>
    );
}