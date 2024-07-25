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
      className="flex flex-col mx-auto bg-gray-50 rounded shadow-md p-4 sm:p-10 gap-1 justify-center w-full max-w-lg"
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
          <option value="" disabled>
            ¿Eres estudiante o familiar?
          </option>
          <option value="estudiante">Estudiante</option>
          <option value="familiar">Familiar</option>
        </select>
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
          value={data.name}
          className="mt-1 text-sm block w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Apellido"
          name="lastname"
          onChange={handleChange}
          value={data.lastname}
          className="mt-1 text-sm block w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="w-full">
          <input
            type="text"
            placeholder="Apellido Paterno"
            name="fatherlastname"
            onChange={handleChange}
            value={data.fatherlastname}
            className="mt-1 text-sm block w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Apellido Materno"
            name="motherlastname"
            onChange={handleChange}
            value={data.motherlastname}
            className="mt-1 text-sm block w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="w-full">
          <input
            type="number"
            placeholder="Celular"
            name="cel"
            onChange={handleChange}
            value={data.cel}
            className="mt-1 text-sm block w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Correo electronico"
            name="email"
            onChange={handleChange}
            value={data.email}
            className="mt-1 text-sm block w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Colegio de procedencia"
          name="school"
          onChange={handleChange}
          value={data.school}
          className="mt-1 text-sm block w-full bg-white border border-gray-300 rounded py-1 px-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
          <option value="" disabled>
            Medio de contacto
          </option>
          <option value="telefono">Telefono</option>
          <option value="correo">Correo</option>
          <option value="whatsapp">Whatsapp</option>
        </select>
      </div>
      <div className="flex items-start gap-2 mt-4">
        <input
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
          value={data.checkbox}
        />
        <div className="text-xs">
          <p>
            Otorgo mi consentimiento para que mis datos sean tratados según la
          </p>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#7d13eF]"
          >
            Política de tratamiento de datos
          </a>
        </div>
      </div>
      <button
        className="bg-[#7d13eF] hover:bg-[#56347c] text-white font-bold py-2 px-4 rounded-3xl mt-4"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
