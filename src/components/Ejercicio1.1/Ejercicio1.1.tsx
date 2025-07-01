import { useEffect, useState } from "react";
import styles from './Ejercicio1.1.module.css'

const nombre = "Orlando Grajeda";
const edad = 21;
const ciudad = "Pueblo Yaqui";
const profesion = "Desarrollador Frontend";
const pasatiempos = ["leer", "programar", "jugar"];
const colorFavorito = "azul";

export default function DatosPersonales() {
  const [fechaActual, setFechaActual] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setFechaActual(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo} style={{ color: colorFavorito }}>
        Hola, me llamo {nombre}
      </h1>
      <p className={styles.info}>Tengo {edad} años.</p>
      <p className={styles.info}>Vivo en {ciudad}.</p>
      <p className={styles.info}>Mi profesión es {profesion}.</p>
      <p className={styles.info}>Mis pasatiempos son:</p>
      <ul className={styles.lista}>
        <li>{pasatiempos[0]}</li>
        <li>{pasatiempos[1]}</li>
        <li>{pasatiempos[2]}</li>
      </ul>
      <p className={styles.fecha}>La fecha y hora actual es: {fechaActual}</p>
    </div>
  );
}
