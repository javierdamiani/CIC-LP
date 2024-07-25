import { useState, useEffect } from "react";
import compass from "/compass.svg";
import people from "/people.svg";
import conti from "/conti.svg";
import heart from "/heart.svg";
import arrow from "/arrow.svg";

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

// Componente del carrusel actualizado
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = cardData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const visibleCards = cardData.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="relative sm:max-w-[70%] mx-auto mt-4">
      <div className="flex overflow-hidden">
        <div
          className="flex flex-row gap-4 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalPages)}%)`,
          }}
        >
          {cardData.map((card, index) => (
            <div className="w-64 flex-shrink-0" key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-end gap-3">
        <button
          onClick={handlePrev}
          className="bottom-2 right-10 bg-gray-200 p-2 rounded-full"
        >
          <img src={arrow} alt="" className="w-10 transform rotate-180" />
        </button>
        <button
          onClick={handleNext}
          className=" bottom-2 right-2 bg-gray-200 p-2 rounded-full"
        >
          <img src={arrow} alt="" className="w-10" />
        </button>
      </div>
    </div>
  );
}

// Componente principal Slider (sin cambios mayores)
function Slider() {
  return (
    <div className="flex flex-col items-center p-10 sm:h-[480px] border border-red-500 bg-[#f4f4f4]">
      <h4 className="text-[#6802C1] text-3xl sm:max-w-96">
        Beneficios de estudiar inglés en la
        <span className="font-bold"> modalidad presencial</span>
      </h4>
      <div className="w-full mt-6 max-w-[1580px]">
        <Carousel />
      </div>
    </div>
  );
}

export default Slider;
