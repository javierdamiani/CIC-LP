import compass from "/compass.svg";
import people from "/people.svg";
import conti from "/conti.svg";
import heart from "/heart.svg";

// Datos de las tarjetas
const cardData = [
  {
    icon: compass,
    title: "Interacción total",
    content:
      "¡Vive el inglés de forma directa! Clases presenciales para niños y adolescentes que aceleran el aprendizaje y mejoran la confianza.",
  },
  {
    icon: people,
    title: "Retroalimentación inmediata",
    content:
      "Nuestros profesores ofrecen apoyo constante y celebran los logros de cada estudiante al instante.",
  },
  {
    icon: conti,
    title: "Experiencia completa",
    content:
      "Clases multisensoriales que mejoran pronunciación y expresión corporal para una comprensión profunda del inglés.",
  },
  {
    icon: heart,
    title: "Grupos homogéneos total",
    content:
      "Tus hijos aprenderán junto a compañeros de su misma edad, enfrentando desafíos y etapas similares.",
  },
  {
    icon: compass,
    title: "Interacción total",
    content:
      "¡Vive el inglés de forma directa! Clases presenciales para niños y adolescentes que aceleran el aprendizaje y mejoran la confianza.",
  },
  {
    icon: people,
    title: "Retroalimentación inmediata",
    content:
      "Nuestros profesores ofrecen apoyo constante y celebran los logros de cada estudiante al instante.",
  },
  {
    icon: conti,
    title: "Experiencia completa",
    content:
      "Clases multisensoriales que mejoran pronunciación y expresión corporal para una comprensión profunda del inglés.",
  },
  {
    icon: heart,
    title: "Grupos homogéneos total",
    content:
      "Tus hijos aprenderán junto a compañeros de su misma edad, enfrentando desafíos y etapas similares.",
  },
];

// Componente de la tarjeta (sin cambios)
function Card({ icon, title, content }) {
  return (
    <div className="p-4 flex flex-col items-center w-full max-w-[310px]">
      <img
        src={icon}
        alt={title}
        className="text-4xl mb-2 sm:max-h-16 h-full"
      />
      <h4 className="text-lg font-semibold mb-1 text-center">{title}</h4>
      <p className="text-center">{content}</p>
    </div>
  );
}

export default Card;
