import styles from "./Ejercicio5.1.module.css";

type EmployeeCardProps = {
    nombre: string;
    puesto: string;
    edad: number;
    salarioMensual: number;
};

function EmployeeCard(props: EmployeeCardProps) {
    const salarioAnual = props.salarioMensual * 12;

    return (
        <div className={styles.employeeCard}>
            <h2>{props.nombre}</h2>
            <p><strong>Puesto:</strong> {props.puesto}</p>
            <p><strong>Edad:</strong> {props.edad} años</p>
            <p><strong>Salario mensual:</strong> ${props.salarioMensual}</p>
            <p><strong>Salario anual:</strong> ${salarioAnual}</p>
        </div>
    );
}

const empleados = [
    { nombre: "Ana Martínez", puesto: "Desarrolladora Frontend", edad: 28, salarioMensual: 3200 },
    { nombre: "Carlos López", puesto: "Diseñador UX/UI", edad: 32, salarioMensual: 2800 },
    { nombre: "María García", puesto: "Project Manager", edad: 35, salarioMensual: 3800 },
    { nombre: "David Rodríguez", puesto: "Desarrollador Backend", edad: 29, salarioMensual: 3400 },
    { nombre: "Laura Sánchez", puesto: "QA Tester", edad: 26, salarioMensual: 2600 }
];

export default function TarjetasDeEmpleados() {
    return (
        <div className={styles.employeeCardsContainer}>
            {empleados.map((empleado, index) => (
                <EmployeeCard
                    key={index}
                    nombre={empleado.nombre}
                    puesto={empleado.puesto}
                    edad={empleado.edad}
                    salarioMensual={empleado.salarioMensual}
                />
            ))}
        </div>
    );
}
