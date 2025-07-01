import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ejercicios Prácticos por Tema</h2>

      <h3 className={styles.subtitle}>Tema 1: Introducción a React</h3>
      <ul className={styles['exercise-list']}>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/datos">Ejercicio 1.1: Mi Primera App React</Link>
        </li>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/calculadora">Ejercicio 1.2: Calculadora Personal</Link>
        </li>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/dashboard">⭐Ejercicio 1.3: Dashboard Dinámico</Link>
        </li>
      </ul>

      <h3 className={styles.subtitle}>Tema 2: Componentes</h3>
      <ul className={styles['exercise-list']}>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/tarjeta">Ejercicio 2.1: Tarjeta de Presentación </Link>
        </li>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/portafolio">Ejercicio 2.2: Portafolio Modular </Link>
        </li>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/sistema">⭐Ejercicio 2.3: Sistema de Componentes Anidados </Link>
        </li>
      </ul>
      <h3 className={styles.subtitle}>Tema 3: JSX</h3>
        <ul className={styles['exercise-list']}>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/generador">Ejercicio 3.1: Generador de HTML Dinámico </Link>
        </li>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/procesador">Ejercicio 3.2: Procesador de Datos Complejos</Link>
        </li>
      </ul>
       <h3 className={styles.subtitle}>Tema 4: Componentes Múltiples</h3>
        <ul className={styles['exercise-list']}>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/galeria">Ejercicio 4.1: Galería de Fotos </Link>
        </li>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/menu">Ejercicio 4.2: Menú de Restaurante</Link>
        </li>
      </ul>
         <h3 className={styles.subtitle}>Tema 5: Props - Pasar Datos a Componentes</h3>
        <ul className={styles['exercise-list']}>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/empleados">Ejercicio 5.1: Tarjetas De Empleados </Link>
        </li>
        <li className={styles['exercise-item']}>
          <Link className={styles['exercise-link']} to="/tienda">Ejercicio 5.2: Tienda De Productos</Link>
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
