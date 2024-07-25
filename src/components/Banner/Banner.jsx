import React from "react";
import clases from "/mas-info.webp";
import girl from "/banner-2.webp";

function Banner() {
  return (
    <section className="flex flex-col bg-[#6802C1] sm:flex-row">
      <div className="m-auto">
        <img
          src={clases}
          alt="Clases dinámicas"
          className="w-full max-w-44 sm:max-w-96 m-auto pt-5 "
          loading="lazy"
        />
        <p className="text-white w-full px-16 py-8 m-auto">
          En el Centro de Idiomas de la Universidad Continental, entendemos que
          aprender un idioma va más allá de memorizar palabras. Se trata de
          crear conexiones significativas y compartir experiencias. Nuestro
          programa "Inglés para Escolares" en la modalidad presencial está
          diseñado especialmente para que los estudiantes interactúen con sus
          profesores y compañeros en un ambiente de apoyo y colaboración.
        </p>
        <p className="text-white w-full px-16 font-bold">
          ¡Inscribe a tu hijo hoy y bríndale la oportunidad de aprender inglés
          en una institución de calidad y prestigio!
        </p>
        <button className="bg-white text-[#6400BE] w-44 ml-16 rounded-full px-4 py-2 mt-6">
          Más información
        </button>
      </div>

      <img
        src={girl}
        alt="Imagen de una niña con un libro en la mano viendo a la cámara y sonriendo"
        className="mt-6 sm:mt-0 w-full sm:max-h-[640px]"
        loading="lazy"
      />
    </section>
  );
}

export default Banner;
