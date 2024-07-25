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
        />
        <p className="text-white w-full px-16 py-8 m-auto">
          <p>
            En el Centro de Idiomas de la Universidad Continental, entendemos
            que aprender un idioma va más allá de memorizar palabras. Se trata
            de crear conexiones significativas y compartir experiencias. Nuestro
            programa "Inglés para Escolares" en la modalidad presencial está
            diseñado especialmente para que los estudiantes interactúen con sus
            profesores y compañeros en un ambiente de apoyo y colaboración.
          </p>
          <p className="mt-5 font-bold">
            ¡Inscribe a tu hijo hoy y bríndale la oportunidad de aprender inglés
            en una institución de calidad y prestigio!
          </p>
        </p>
        <button class="bg-white text-[#6400BE] w-44 ml-16 rounded-full px-4 py-2">
          Más información
        </button>
      </div>

      <img src={girl} alt="" className="mt-6 sm:mt-0 w-full sm:max-h-[640px]" />
    </section>
  );
}

export default Banner;
