import { useState } from "react";
function Form() {
  const [data, setData] = useState({
    selectOption: "",
    name: "",
    lastname: "",
    fatherlastname: "",
    motherlastname: "",
    cel: "",
    email: "",
    school: "",
    contactSelect: "",
    checkbox: false,
  });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <form
      className=" flex flex-col gap-y-2 sm:max-h-[400px] mx-auto bg-gray-50 rounded shadow-md p-2"
      onSubmit={handleSubmit}
    >
      <h3 className="text-sm">Registra tus datos y recibe más información</h3>
      <div>
        <select
          name="selectOption"
          onChange={handleChange}
          value={data.selectOption}
          className={`mt-1 text-sm block w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
            data.selectOption === "" ? "text-gray-400" : "text-black"
          }`}
        >
          <option value="" disabled selected>
            ¿Eres estudiante o familiar?
          </option>
          <option value="estudiante">Estudiante</option>
          <option value="familiar">Familiar</option>
        </select>
      </div>
      <div className="text-sm w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
      </div>
      <div className="text-sm w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        <input
          type="text"
          placeholder="Apellido"
          name="lastname"
          onChange={handleChange}
          value={data.lastname}
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <div className="text-sm w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <input
            type="text"
            placeholder="Apellido Paterno"
            name="fatherlastname"
            onChange={handleChange}
            value={data.fatherlastname}
          />
        </div>
        <div className="text-sm w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <input
            type="text"
            placeholder="Apellido Materno"
            name="motherlastname"
            onChange={handleChange}
            value={data.motherlastname}
          />
        </div>
      </div>
      <div className="flex flex-row gap-x-2">
        <div className="text-sm w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <input
            type="number"
            placeholder="Celular"
            name="cel"
            onChange={handleChange}
            value={data.cel}
          />
        </div>
        <div className="text-sm w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <input
            type="text"
            placeholder="Correo electronico"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
        </div>
      </div>
      <div className="text-sm w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        <input
          type="text"
          placeholder="Colegio de procedencia"
          name="school"
          onChange={handleChange}
          value={data.school}
        />
      </div>
      <div>
        <select
          name="contactSelect"
          onChange={handleChange}
          value={data.contactSelect}
          className={`mt-1 text-sm block w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
            data.contactSelect === "" ? "text-gray-400" : "text-black"
          }`}
        >
          <option value="" disabled selected>
            Medio de contacto
          </option>
          <option value="telefono">Telefono</option>
          <option value="correo">Correo</option>
          <option value="whatsapp">Whatsapp</option>
        </select>
      </div>
      <div className="flex flex-row gap-x-2">
        <input
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
          value={data.checkbox}
        />
        <div>
          <p className=" text-xs">
            Otorgo mi consetimiento para que mis datos sean tratados segun la
          </p>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#7d13eF]"
          >
            Politica de tratamiento de datos
          </a>
        </div>
      </div>
      <button
        className="bg-[#7d13eF] hover: hover:bg-[#56347c] text-white font-bold py-2 px-4 rounded-3xl"
        // disabled={!data.checkbox}
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
