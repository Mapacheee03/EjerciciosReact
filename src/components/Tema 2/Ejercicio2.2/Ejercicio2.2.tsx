import styles from "./Ejercicio2.2.module.css";
import { useNavigate } from "react-router-dom";

const proyectos = [
    { nombre: "Evaluación Docente", tecnologia: "Angular + Node.js + PostgresSQL ", descripcion: "Sistema web que permite a los alumnos evaluar de forma anónima el desempeño de sus docentes, generando reportes en tiempo real para la mejora continua." },
    { nombre: "MP Music", tecnologia: "React + Node.js", descripcion: "Una app de musica" },
];

const habilidades = ["TypeScript", "React", "Node.js", "CSS", "Git", "PostgresSQL", "Express"];

function PortafolioModular() {
    const navigate = useNavigate();

    return (
        <div className={styles.portafolioContainer}>
            <button onClick={() => navigate("/")} className={styles.backButton}>
                Regresar
            </button>
            <h1 className={styles.titulo}>Mi Portafolio</h1>
            <div id="proyectos" className={styles.seccion}>
                <h2 className={styles.seccionTitulo}>Proyectos</h2>
                {proyectos.map((proy) => (
                    <div key={proy.nombre} className={styles.proyectoCard}>
                        <h3 className={styles.proyectoNombre}>{proy.nombre}</h3>
                        <p className={styles.proyectoTecnologia}>Tecnología: {proy.tecnologia}</p>
                        <p className={styles.proyectoDescripcion}>Descripción: {proy.descripcion}</p>
                    </div>
                ))}
            </div>
            <div id="habilidades" className={styles.seccion}>
                <h2 className={styles.seccionTitulo}>Habilidades</h2>
                <ul className={styles.habilidadesLista}>
                    {habilidades.map((hab) => (
                        <li key={hab} className={styles.habilidadItem}>{hab}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default PortafolioModular;
