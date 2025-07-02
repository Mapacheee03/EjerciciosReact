 import  { useEffect, useState } from 'react';
import styles from './Ejercicio3.3.module.css'
import { useNavigate } from "react-router-dom";


type WeatherType = "sunny" | "rainy" | "cloudy" | "night" | null;

interface Props {
    min?: number;
    forecast?: WeatherType[];
}

function getWeatherBymin(min: number): WeatherType {
    if (min >= 6 && min < 10) return "sunny";
    if (min >= 10 && min < 20) return "cloudy";
    if (min >= 20 && min < 30) return "rainy";
    if ((min >= 30 && min <= 59) || (min >= 0 && min < 6)) return "night";
    return null;
}

function WeatherIcon({ weather }: { weather: WeatherType }) {
    return (
        <>
            {weather === "sunny" ? (
                <p>☀️ ¡Hace sol!</p>
            ) : weather === "cloudy" ? (
                <p>☁️ Está nublado.</p>
            ) : weather === "rainy" ? (
                <p>🌧️ Está lloviendo.</p>
            ) : weather === "night" ? (
                <p>🌙 Es de noche.</p>
            ) : (
                <p>No se pudo determinar el clima.</p>
            )}
        </>
    );
}

export default function RenderizadorCondicional(props: Props) {
    const [min, setMin] = useState<number>(props.min ?? new Date().getSeconds());

    useEffect(() => {
        if (props.min !== undefined) {
            setMin(props.min);
            return;
        }
        const interval = setInterval(() => {
            setMin(new Date().getSeconds());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const weather = getWeatherBymin(min);
    const forecast = props.forecast ?? [];
    const emptyArray: string[] = [];
    const nullValue = null;
    const undefinedValue = undefined;
    const navigate = useNavigate();

    return (
        <>
            <section className={styles.container}>
                <button onClick={() => navigate("/")} className={styles.backButton}>
                    Regresar
                </button>
                <h2>Hora actual: {min}</h2>
                <WeatherIcon weather={weather} />

                {/* Renderizado condicional avanzado para el pronóstico */}
                {forecast.length > 0 ? (
                    <>
                        <h3>Pronóstico:</h3>
                        <ul>
                            {forecast.map((w, i) => (
                                <li key={i}>
                                    {w === "sunny" ? "☀️" : w === "cloudy" ? "☁️" : w === "rainy" ? "🌧️" : w === "night" ? "🌙" : "?"} {w}
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>No hay datos de pronóstico.</p>
                )}

                {/* Ejemplo de manejo de array vacío */}
                {emptyArray.length === 0 && <p>Array vacío detectado.</p>}

                {/* Ejemplo de manejo de null y undefined */}
                {nullValue === null && <p>El valor es null.</p>}
                {undefinedValue === undefined && <p>El valor es undefined.</p>}
            </section>
        </>
    );
}