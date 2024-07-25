import React from "react";
import logo_conti from "/uni-conti.webp";
import tel from "/phone.webp";
import mail from "/mail.webp";
import ubi from "/ubi.webp";

function Footer() {
  return (
    <footer>
      <section className="bg-[#f4f4f4] pt-9 pl-7  flex flex-col sm:flex-row gap-5">
        <img
          src={logo_conti}
          alt="Logo Universidad Continental"
          className="w-full max-w-44"
        />
        <ul className="bg-[#f4f4f4] py-4 rounded-bl-2xl rounded-br-2xl  flex flex-col sm:flex-row gap-2">
          <li className="flex items-center mb-3 text-sm">
            <img src={tel} alt="Edad Icon" className="mr-2 w-5 h-5" />
            972959495
          </li>
          <li className="flex items-center mb-3 text-sm">
            <img src={mail} alt="Edad Icon" className="mr-2 w-5 h-5" />
            centroidiomasuc@continental.edu.pe
          </li>
          <li className="flex items-center mb-3 text-sm">
            <div className="flex items-center mb-1">
              <img src={ubi} alt="Horario Icon" className="mr-2 w-5 h-5" />
              <p>
                Campus Huancayo <br />
                Calle Real 125 Av. San Carlos 1980
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="bg-[#434343] flex items-center justify-center h-[115px]">
        <p className="text-white text-center">
          © 2024 Centro de Idiomas de la Universidad Continental
        </p>
      </section>
    </footer>
  );
}

export default Footer;
