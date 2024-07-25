import React from "react";
import logo_cambridge from "/logo-cambridge.webp";

function Cambridge() {
  return (
    <section className="p-5 gap-6 flex flex-col sm:flex-row my-2">
      <h2 className="text-2xl">
        Somos centro examinador <br />
        <span className="font-bold">Cambridge</span>
      </h2>
      <img
        src={logo_cambridge}
        alt="Logo de la Universidad de Cambridge"
        className="w-44"
      />
      <p className="font-light">
        En el Centro de Idiomas de la Universidad Continental, nos enorgullece
        estar autorizados como Centro Examinador Cambridge. Este reconocimiento
        internacional garantiza que nuestros estudiantes pueden certificar su
        dominio del inglés con exámenes que son valorados y reconocidos en todo
        el mundo.
      </p>
    </section>
  );
}

export default Cambridge;
