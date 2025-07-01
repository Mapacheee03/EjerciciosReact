import style from "./Ejercicio4.1.module.css";

type Foto = {
    titulo: string;
    descripcion: string;
    ubicacion: string;
    etiquetas: string[];
};

const fotos: Foto[] = [
    { titulo: "Amanecer en la Montaña", descripcion: "Primera luz del día iluminando los picos nevados", ubicacion: "Alpes Suizos", etiquetas: ["montaña", "amanecer", "naturaleza"] },
    { titulo: "Reflexiones Urbanas", descripcion: "Rascacielos reflejados en charcos después de la lluvia", ubicacion: "Nueva York", etiquetas: ["urbano", "reflejo", "lluvia"] },
    { titulo: "Vida Marina", descripcion: "Coloridos peces tropicales en arrecife de coral", ubicacion: "Gran Barrera de Coral", etiquetas: ["mar", "peces", "coral"] },
    { titulo: "Bosque Encantado", descripcion: "Rayos de sol filtrándose entre árboles centenarios", ubicacion: "Selva Negra, Alemania", etiquetas: ["bosque", "sol", "árboles"] },
    { titulo: "Desierto Infinito", descripcion: "Dunas doradas extendiéndose hasta el horizonte", ubicacion: "Sahara, Marruecos", etiquetas: ["desierto", "dunas", "horizonte"] },
    { titulo: "Aurora Boreal", descripcion: "Luces verdes danzando en el cielo nocturno", ubicacion: "Islandia", etiquetas: ["aurora", "noche", "luces"] }
];

const tituloGaleria = "Momentos Capturados";
const subtituloGaleria = "Galería de fotografía profesional";

type GalleryHeaderProps = {
    titulo: string;
    subtitulo: string;
};

function GalleryHeader({ titulo, subtitulo }: GalleryHeaderProps) {
    return (
        <header className={style.header}>
            <h1 className={style.titulo}>{titulo}</h1>
            <h2 className={style.subtitulo}>{subtitulo}</h2>
        </header>
    );
}

type PhotoCardProps = {
    titulo: string;
    descripcion: string;
    ubicacion: string;
    etiquetas: string[];
};

function PhotoCard({ titulo, descripcion, ubicacion, etiquetas }: PhotoCardProps) {
    return (
        <div className={style.photoCard}>
            <h3 className={style.photoTitulo}>{titulo}</h3>
            <p className={style.photoDescripcion}>{descripcion}</p>
            <small className={style.photoUbicacion}>{ubicacion}</small>
            <div className={style.etiquetas}>
                {etiquetas.map((etiqueta, idx) => (
                    <span
                        key={idx}
                        className={style.etiqueta}
                    >
                        #{etiqueta}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function GaleriaDeFotos() {
    return (
        <div className={style.galeriaContainer}>
            <GalleryHeader titulo={tituloGaleria} subtitulo={subtituloGaleria} />
            <div className={style.galeriaGrid}>
                {fotos.map((foto, idx) => (
                    <PhotoCard
                        key={idx}
                        titulo={foto.titulo}
                        descripcion={foto.descripcion}
                        ubicacion={foto.ubicacion}
                        etiquetas={foto.etiquetas}
                    />
                ))}
            </div>
        </div>
    );
}
