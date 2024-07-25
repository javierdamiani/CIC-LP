import clock from "/alarm.svg";
import book from "/book.svg";
import sand_clock from "/sand_clock.svg";
import happy_face from "/face.svg";
import primary from "/primary.svg";
import secondary from "/secondary.svg";

function Courses() {
  return (
    <div className="w-full py-10 sm:px-20 mx-auto my-auto flex flex-col justify-center items-center">
      <h3 className="text-center text-3xl text-[#6802C1]">
        Nuestros <span className="font-bold">cursos</span>
      </h3>
      <div className="flex sm:flex-row gap-8 mt-8 flex-col items-center w-full justify-center">
        <section className="sm:w-1/2 sm:max-w-[531px] w-full px-6">
          <img src={primary} alt="" />
          <ul className="bg-[#f4f4f4] p-4 rounded-bl-2xl rounded-br-2xl">
            <li className="flex items-center mb-3 text-sm">
              <img src={happy_face} alt="Edad Icon" className="mr-2 w-5 h-5" />
              <span className="font-bold">Edad:</span> De 9 a 11 años
            </li>
            <li className="flex flex-col mb-2 text-sm">
              <div className="flex items-center mb-1">
                <img src={clock} alt="Horario Icon" className="mr-2 w-5 h-5" />
                <span className="font-bold">Horario:</span>
              </div>
              <div className="ml-7">
                <p className="mb-1">Viernes de 4:55pm a 8:15pm</p>
                <p>Sábados de 4:10pm a 7:20pm</p>
              </div>
            </li>
            <li className="flex items-center mb-3 text-sm">
              <img src={sand_clock} alt="Edad Icon" className="mr-2 w-5 h-5" />
              <span className="font-bold">Duración:</span>19 ciclos divididos en
              3 niveles
            </li>
            <li className="flex items-center mb-3 text-sm">
              <img src={book} alt="Edad Icon" className="mr-2 w-5 h-5" />
              <span className="font-bold">Recursos:</span>Material bibliográfico
              y de preparación
            </li>
          </ul>
        </section>
        <section className="sm:w-1/2 sm:max-w-[531px] w-full px-6">
          <img src={secondary} alt="" />
          <ul className="bg-[#f4f4f4] p-4 rounded-bl-2xl rounded-br-2xl">
            <li className="flex items-center mb-3 text-sm">
              <img src={happy_face} alt="Edad Icon" className="mr-2 w-5 h-5" />
              <span className="font-bold">Edad:</span> De 9 a 11 años
            </li>
            <li className="flex flex-col mb-3 text-sm">
              <div className="flex items-center mb-1">
                <img src={clock} alt="Horario Icon" className="mr-2 w-5 h-5" />
                <span className="font-bold">Horario:</span>
              </div>
              <div className="ml-7">
                <p className="mb-1">Viernes de 4:55pm a 8:15pm</p>
                <p>Sábados de 4:10pm a 7:20pm</p>
              </div>
            </li>
            <li className="flex items-center mb-3 text-sm">
              <img src={sand_clock} alt="Edad Icon" className="mr-2 w-5 h-5" />
              <span className="font-bold">Duración:</span>19 ciclos divididos en
              3 niveles
            </li>
            <li className="flex items-center mb-3 text-sm">
              <img src={book} alt="Edad Icon" className="mr-2 w-5 h-5" />
              <span className="font-bold">Recursos:</span>Material bibliográfico
              y de preparación
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Courses;
