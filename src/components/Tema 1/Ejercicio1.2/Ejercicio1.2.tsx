import styles from './Ejercicio1.2.module.css'
import { useNavigate } from "react-router-dom";


const fechaNacimiento = new Date(2004, 2, 27) // Recuerda: mes empieza en 0
const añosExperiencia = 3
const cafesPorDia = 1
const horasSueñoPorDia = 7
const librosLeidosAño = 5
const horasEjercicioPorSemana = 3

function calcularEstadisticas() {

    const ahora = new Date()
    const msVida = ahora.getTime() - fechaNacimiento.getTime()
    const diasVida = Math.floor(msVida / (1000 * 60 * 60 * 24))
    const horasVida = Math.floor(msVida / (1000 * 60 * 60))
    const minutosVida = Math.floor(msVida / (1000 * 60))

    const diasLaborales = añosExperiencia * 5 * 52
    const lineasCodigo = diasLaborales * 100

    const horasSuenoTotales = diasVida * horasSueñoPorDia
    const horasEjercicio = Math.floor((diasVida / 7) * horasEjercicioPorSemana)
    const cafesTotales = diasVida * cafesPorDia
    const librosLeidos = Math.floor((diasVida / 365) * librosLeidosAño)
    const horasViendoPantalla = Math.floor(horasVida * 0.3) // 30% del tiempo

    return {
        diasVida,
        horasVida,
        minutosVida,
        lineasCodigo,
        horasSuenoTotales,
        horasEjercicio,
        cafesTotales,
        librosLeidos,
        horasViendoPantalla
    }
}

export default function CalculadoraPersonal() {
    const stats = calcularEstadisticas()
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <button onClick={() => navigate("/")} className={styles.backButton}>
                Regresar
            </button>
            <h2 className={styles.title}>Calculadora Personal</h2>
            <ul className={styles['exercise-list']}>
                <li className={styles['exercise-item']}>Edad en días: {stats.diasVida}</li>
                <li className={styles['exercise-item']}>Edad en horas: {stats.horasVida}</li>
                <li className={styles['exercise-item']}>Edad en minutos: {stats.minutosVida}</li>
                <li className={styles['exercise-item']}>Líneas de código escritas: {stats.lineasCodigo.toLocaleString()}</li>
                <li className={styles['exercise-item']}>Horas totales de sueño: {stats.horasSuenoTotales.toLocaleString()}</li>
                <li className={styles['exercise-item']}>Horas de ejercicio en la vida: {stats.horasEjercicio.toLocaleString()}</li>
                <li className={styles['exercise-item']}>Cafés tomados en la vida: {stats.cafesTotales.toLocaleString()}</li>
                <li className={styles['exercise-item']}>Libros leídos en la vida: {stats.librosLeidos}</li>
                <li className={styles['exercise-item']}>Horas frente a una pantalla: {stats.horasViendoPantalla.toLocaleString()}</li>
            </ul>
        </div>
    )
}
