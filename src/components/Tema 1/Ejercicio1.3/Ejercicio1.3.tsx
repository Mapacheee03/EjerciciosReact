import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Ejercicio1.3.module.css";

const BIRTHDAY_MONTH = 2;
const BIRTHDAY_DAY = 27;

export default function DashboardDinamico() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    function getMotivationalPhrase(hour: number) {
        if (hour >= 6 && hour < 12) {
            return "¡Empieza el día con energía!";
        } else if (hour >= 12 && hour < 18) {
            return "¡Sigue adelante, la tarde es tuya!";
        } else if (hour >= 18 && hour < 22) {
            return "¡Buen trabajo hoy, relájate y disfruta!";
        } else {
            return "¡Hora de descansar y recargar energías!";
        }
    }

    function getDaysUntilBirthday(month: number, day: number) {
        const currentYear = now.getFullYear();
        let nextBirthday = new Date(currentYear, month - 1, day);
        if (
            now.getMonth() > month - 1 ||
            (now.getMonth() === month - 1 && now.getDate() > day)
        ) {
            nextBirthday = new Date(currentYear + 1, month - 1, day);
        }
        const diff = nextBirthday.getTime() - now.getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    function getYearProgress() {
        const start = new Date(now.getFullYear(), 0, 1);
        const end = new Date(now.getFullYear() + 1, 0, 1);
        const progress =
            ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) *
            100;
        return progress.toFixed(2);
    }

    const WEEKDAYS = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];

    function formatTime(num: number) {
        return num < 10 ? "0" + num : num;
    }

    const navigate = useNavigate();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const daysUntilBirthday = getDaysUntilBirthday(BIRTHDAY_MONTH, BIRTHDAY_DAY);
    const weekday = WEEKDAYS[now.getDay()];
    const yearProgress = getYearProgress();
    const motivationalPhrase = getMotivationalPhrase(hours);

    return (
        <div className={styles.dashboard}>
            <button onClick={() => navigate("/")} className={styles.backButton}>
                Regresar
            </button>
            <h2 className={styles.title}>Dashboard Dinámico</h2>
            <div className={styles.clock}>
                <b>Reloj:</b> {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
            </div>
            <div className={styles.birthday}>
                <b>Días hasta tu cumpleaños:</b> {daysUntilBirthday}
            </div>
            <div className={styles.weekday}>
                <b>Hoy es:</b> {weekday}
            </div>
            <div className={styles.progress}>
                <b>Progreso del año:</b> {yearProgress}%
            </div>
            <div className={styles.phrase}>
                <i>{motivationalPhrase}</i>
            </div>
        </div>
    );
}
