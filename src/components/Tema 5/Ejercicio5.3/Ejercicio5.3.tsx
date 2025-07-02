import styles from './Ejercicio5.3.module.css'

export default function SistemaDeGestiónEscolar() {
  const classroomsData = [
    {
      nombre: '1A',
      profesor: {
        nombre: 'Sr. Pérez',
        materias: ['Matemáticas', 'Física'],
        experiencia: 12,
      },
      estudiantes: [
        { nombre: 'Ana', edad: 17, calificaciones: [9, 10, 8.5], curso: 'Ciencias' },
        { nombre: 'Luis', edad: 16, calificaciones: [7, 6.5, 8], curso: 'Ciencias' },
        { nombre: 'Carla', edad: 17, calificaciones: [10, 9.8, 10], curso: 'Ciencias' },
      ],
    },
    {
      nombre: '2B',
      profesor: {
        nombre: 'Sra. Gómez',
        materias: ['Historia', 'Literatura'],
        experiencia: 9,
      },
      estudiantes: [
        { nombre: 'José', edad: 18, calificaciones: [6, 6, 6.5], curso: 'Humanidades' },
        { nombre: 'Lucía', edad: 17, calificaciones: [9.5, 9, 9], curso: 'Humanidades' },
      ],
    },
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎓 Sistema de Gestión Escolar</h1>

      {classroomsData.map((aula, index) => {
        const estudiantesConPromedio = aula.estudiantes.map((est) => {
          const promedio =
            est.calificaciones.reduce((acc, val) => acc + val, 0) /
            est.calificaciones.length
          return { ...est, promedio }
        })

        const mejoresEstudiantes = [...estudiantesConPromedio]
          .sort((a, b) => b.promedio - a.promedio)
          .slice(0, 3)

        return (
          <div key={index} className={styles.classroom}>
            <h2>Aula: {aula.nombre}</h2>

            <div className={styles.teacher}>
              <p>👨‍🏫 Profesor: <strong>{aula.profesor.nombre}</strong></p>
              <p>Materias: {aula.profesor.materias.join(', ')}</p>
              <p>Experiencia: {aula.profesor.experiencia} años</p>
            </div>

            <h3 className={styles.subtitle}>👨‍🎓 Estudiantes:</h3>
            <ul className={styles.studentList}>
              {estudiantesConPromedio.map((est, idx) => (
                <li key={idx}>
                  {est.nombre} ({est.edad} años) - Curso: {est.curso} - Promedio:{' '}
                  {est.promedio.toFixed(2)}
                </li>
              ))}
            </ul>

            <h4 className={styles.bestTitle}>🏅 Mejores Estudiantes:</h4>
            <ul className={styles.bestList}>
              {mejoresEstudiantes.map((est, i) => (
                <li key={i}>
                  {est.nombre} - Promedio: {est.promedio.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

