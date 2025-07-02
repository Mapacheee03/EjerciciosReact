import { useState } from "react";
import style from "./Ejercicio4.3.module.css";
import { useNavigate } from "react-router-dom";

type InstructorProps = {
    name: string;
    bio: string;
};

const Instructor: React.FC<InstructorProps> = ({ name, bio }) => (
    <div className={style.instructor}>
        <div>
            <strong>{name}</strong>
            <div>{bio}</div>
        </div>
    </div>
);

type ProgressBarProps = { progress: number };
const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
    <div className={style.progressBar}>
        <div className={style.progressFill} style={{ width: `${progress}%` }} />
    </div>
);

type RatingProps = {
    rating: number;
    setRating?: (r: number) => void;
};
const Rating: React.FC<RatingProps> = ({ rating, setRating }) => (
    <div className={style.rating}>
        {[1, 2, 3, 4, 5].map((star) => (
            <span
                key={star}
                onClick={() => setRating && setRating(star)}
                data-testid={`star-${star}`}
                style={{ color: star <= rating ? "#ffc107" : "#e4e5e9", cursor: setRating ? "pointer" : "default" }}
            >
                ★
            </span>
        ))}
    </div>
);

type LessonProps = {
    title: string;
    completed: boolean;
    onToggle: () => void;
};
const Lesson: React.FC<LessonProps> = ({ title, completed, onToggle }) => (
    <li className={style.lesson}>
        <label>
            <input type="checkbox" checked={completed} onChange={onToggle} /> {title}
        </label>
    </li>
);

type ModuleProps = {
    title: string;
    lessons: { title: string; completed: boolean }[];
    onToggleLesson: (lessonIdx: number) => void;
};
const Module: React.FC<ModuleProps> = ({ title, lessons, onToggleLesson }) => (
    <div className={style.module}>
        <h4>{title}</h4>
        <ul>
            {lessons.map((lesson, idx) => (
                <Lesson
                    key={idx}
                    title={lesson.title}
                    completed={lesson.completed}
                    onToggle={() => onToggleLesson(idx)}
                />
            ))}
        </ul>
    </div>
);

type CourseProps = {
    title: string;
    instructor: InstructorProps;
    modules: { title: string; lessons: { title: string; completed: boolean }[] }[];
    rating: number;
    setRating: (r: number) => void;
    onToggleLesson: (moduleIdx: number, lessonIdx: number) => void;
};
const Course: React.FC<CourseProps> = ({
    title,
    instructor,
    modules,
    rating,
    setRating,
    onToggleLesson
}) => {
    const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
    const completedLessons = modules.reduce(
        (sum, m) => sum + m.lessons.filter((l) => l.completed).length,
        0
    );
    const progress = Math.round((completedLessons / totalLessons) * 100);

    return (
        <div className={style.course}>
            <h2>{title}</h2>
            <Instructor {...instructor} />
            <ProgressBar progress={progress} />
            <div>
                <strong>Rating: </strong>
                <Rating rating={rating} setRating={setRating} />
            </div>
            {modules.map((mod, mIdx) => (
                <Module
                    key={mIdx}
                    title={mod.title}
                    lessons={mod.lessons}
                    onToggleLesson={(lIdx) => onToggleLesson(mIdx, lIdx)}
                />
            ))}
        </div>
    );
};

const initialCourses = [
    {
        title: "React Básico",
        instructor: {
            name: "Ana López",
            bio: "Desarrolladora Frontend y entusiasta de React.",
        },
        modules: Array.from({ length: 4 }, (_, m) => ({
            title: `Módulo ${m + 1}`,
            lessons: Array.from({ length: 3 }, (_, l) => ({
                title: `Lección ${l + 1}`,
                completed: false
            }))
        })),
        rating: 4
    },
    {
        title: "JavaScript Intermedio",
        instructor: {
            name: "Carlos Pérez",
            bio: "Ingeniero de Software y docente.",
        },
        modules: Array.from({ length: 4 }, (_, m) => ({
            title: `Módulo ${m + 1}`,
            lessons: Array.from({ length: 3 }, (_, l) => ({
                title: `Lección ${l + 1}`,
                completed: false
            }))
        })),
        rating: 5
    },
    {
        title: "CSS Avanzado",
        instructor: {
            name: "Lucía Gómez",
            bio: "Especialista en diseño web y CSS.",
        },
        modules: Array.from({ length: 4 }, (_, m) => ({
            title: `Módulo ${m + 1}`,
            lessons: Array.from({ length: 3 }, (_, l) => ({
                title: `Lección ${l + 1}`,
                completed: false
            }))
        })),
        rating: 3
    }
];

export default function PlataformaDeCursosOnline() {
    const [courses, setCourses] = useState(initialCourses);
    const navigate = useNavigate();

    const handleToggleLesson = (courseIdx: number, moduleIdx: number, lessonIdx: number) => {
        setCourses((prev) =>
            prev.map((course, cIdx) =>
                cIdx !== courseIdx
                    ? course
                    : {
                        ...course,
                        modules: course.modules.map((mod, mIdx) =>
                            mIdx !== moduleIdx
                                ? mod
                                : {
                                    ...mod,
                                    lessons: mod.lessons.map((lesson, lIdx) =>
                                        lIdx !== lessonIdx
                                            ? lesson
                                            : { ...lesson, completed: !lesson.completed }
                                    )
                                }
                        )
                    }
            )
        );
    };

    const handleSetRating = (courseIdx: number, rating: number) => {
        setCourses((prev) =>
            prev.map((course, cIdx) =>
                cIdx !== courseIdx ? course : { ...course, rating }
            )
        );
    };

    return (
        <div className={style.plataforma}>
            <button onClick={() => navigate("/")} className={style.backButton}>
                Regresar
            </button>
            <h1>Plataforma de Cursos Online</h1>
            {courses.map((course, idx) => (
                <Course
                    key={idx}
                    title={course.title}
                    instructor={course.instructor}
                    modules={course.modules}
                    rating={course.rating}
                    setRating={(r) => handleSetRating(idx, r)}
                    onToggleLesson={(mIdx, lIdx) => handleToggleLesson(idx, mIdx, lIdx)}
                />
            ))}
        </div>
    );
}
