import { useState } from "react";
import useGetName from "../../hooks/register/useGetName";
import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { newUser } from "../../services/RegisterNewUser";
import Swal from "sweetalert2";
import {
  initialErrorMessageForm,
  initialForm,
  initialSecurityPass,
} from "./initialValuesForm";
import { getPasswordStrength } from "../../helpers/getPasswordStrength";

const Form = () => {
  const { getName, errorInput } = useGetName();

  const [form, setForm] = useState(initialForm);
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMessageForm, setErrorMessageForm] = useState(
    initialErrorMessageForm
  );
  const [securityPass, setSecurityPass] = useState(initialSecurityPass);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    getName(name, value);

    if (name === "password") {
      const securityPass = getPasswordStrength(value);
      setSecurityPass(securityPass);
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(form).some((value) => !value)) {
      setErrorMessageForm({
        error: true,
        errorMessage: "Error en el formulario",
      });
      return;
    }

    for (const name in errorInput) {
      if (errorInput[name].error) {
        setErrorMessageForm({
          error: true,
          errorMessage: `Error en algun campo`,
        });
        return;
      }
    }

    if (form.password !== confirmPass) {
      setErrorMessageForm({
        error: true,
        errorMessage: "La contraseña no coincide",
      });
      return;
    }

    setErrorMessageForm({ error: false, errorMessage: "" });

    const formWithoutSpaces = {
      name: form.name.trim(),
      lastName: form.lastName.trim(),
      address: form.address.trim(),
      phone: form.phone,
      email: form.email,
      password: form.password,
    };

    const response = await newUser(formWithoutSpaces);

    const alert = {
      icon: "",
      title: "",
    };

    response.status === 200
      ? ((alert.icon = "success"),
        (alert.title = "Usuario Registrado"),
        (setForm(initialForm),
        setConfirmPass(""),
        setSecurityPass(initialSecurityPass)))
      : ((alert.icon = "error"), (alert.title = "El email ya esta en uso "));

    Swal.fire({
      position: "center",
      icon: alert.icon,
      title: alert.title,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleIsVisiblePass = () => {
    setIsVisiblePass(!isVisiblePass);
  };

  const handleIsVisibleConfirm = () => {
    setIsVisibleConfirm(!isVisibleConfirm);
  };

  const styleClass =
    "w-[19.375rem] h-[2.875rem] xl:w-[590px] p-2 mt-1 mb-3 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500";

  const styleClassSuccess = "valid:border-green-600 focus:outline-none";

  const styleClassInvalid = "border-red-500 text-pink-600";

  const styleErrorInput =
    "w-11/12 text-center text-sm font-semibold rounded-lg p-2 mb-2 text-white bg-red-500";

  return (
    <form
      className="w-[21.875rem] pl-5 md:m-auto lg:m-0"
      onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nombre <span className="text-red-500">*</span>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          className={`${styleClass} ${
            errorInput.name.error ? styleClassInvalid : styleClassSuccess
          }`}
          placeholder="Nombre"
          title="Solo acepta letras."
          autoComplete="off"
          required
          onChange={handleChangeInput}
        />
      </label>
      {errorInput.name.error && (
        <p className={`${styleErrorInput}`}>{errorInput.name.messageError}</p>
      )}

      <label htmlFor="lastName">
        Apellido <span className="text-red-500">*</span>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={form.lastName}
          maxLength={30}
          className={`${styleClass} ${
            errorInput.lastName.error ? styleClassInvalid : styleClassSuccess
          }`}
          placeholder="Apellido"
          title="Solo acepta letras."
          autoComplete="off"
          required
          onChange={handleChangeInput}
        />
      </label>
      {errorInput.lastName.error && (
        <p className={`${styleErrorInput}`}>
          {errorInput.lastName.messageError}
        </p>
      )}

      <label htmlFor="address">
        Dirección <span className="text-red-500">*</span>
        <input
          type="text"
          id="address"
          name="address"
          value={form.address}
          maxLength={50}
          className={`${styleClass} ${
            errorInput.address.error ? styleClassInvalid : styleClassSuccess
          }`}
          placeholder="Rivadavia 2036, 2D, Mar del Plata"
          title="Acepta letras, numeros y comas."
          autoComplete="off"
          required
          onChange={handleChangeInput}
        />
      </label>
      {errorInput.address.error && (
        <p className={`${styleErrorInput}`}>
          {errorInput.address.messageError}
        </p>
      )}

      <label htmlFor="phone">
        Número de teléfono <span className="text-red-500">*</span>
        <input
          type="text"
          id="phone"
          name="phone"
          value={form.phone}
          className={`${styleClass} ${
            errorInput.phone.error ? styleClassInvalid : styleClassSuccess
          }`}
          placeholder="2236567985"
          title="Acepta solo numeros."
          required
          autoComplete="off"
          onChange={handleChangeInput}
        />
      </label>
      {errorInput.phone.error && (
        <p className={`${styleErrorInput}`}>{errorInput.phone.messageError}</p>
      )}

      <label htmlFor="email">
        Correo electrónico <span className="text-red-500">*</span>
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          className={`${styleClass} ${
            errorInput.email.error ? styleClassInvalid : styleClassSuccess
          }`}
          placeholder="correo@gmail.com"
          title="Solo acepta formato de email usuario@dominio.com"
          required
          autoComplete="off"
          onChange={handleChangeInput}
        />
      </label>
      {errorInput.email.error && (
        <p className={`${styleErrorInput}`}>{errorInput.email.messageError}</p>
      )}
      <div className="relative xl:w-[36.875rem]">
        <label htmlFor="password">
          Contraseña <span className="text-red-500">*</span>
          <input
            type={isVisiblePass ? "text" : "password"}
            id="password"
            name="password"
            value={form.password}
            className={`${styleClass} ${
              errorInput.email.error ? styleClassInvalid : styleClassSuccess
            }`}
            title="No acepta < >, ="
            placeholder="Contraseña"
            required
            autoComplete="off"
            onChange={handleChangeInput}
          />
          <span
            className="absolute right-7 bottom-6 text-2xl xl:right-3"
            onClick={handleIsVisiblePass}>
            {isVisiblePass ? (
              <BiShow className="text-primary-700" />
            ) : (
              <AiOutlineEyeInvisible className="text-primary-700" />
            )}
          </span>
        </label>
      </div>
      {securityPass.message.length > 1 && (
        <div
          role="alert"
          className={`rounded border-s-4 ${securityPass.strong} p-4 ${securityPass.background}`}>
          <p className={`block font-medium ${securityPass.text}`}>
            Nivel de contraseña {securityPass.message}
          </p>
        </div>
      )}
      {errorInput.password.error && (
        <p className={`${styleErrorInput}`}>
          {errorInput.password.messageError}
        </p>
      )}
      <div className="relative xl:w-[36.875rem]">
        <label htmlFor="confirm">
          Confirmar contraseña <span className="text-red-500">*</span>
          <input
            type={isVisibleConfirm ? "text" : "password"}
            id="confirm"
            name="confirm"
            value={confirmPass}
            className={`${styleClass} ${
              errorInput.email.error ? styleClassInvalid : styleClassSuccess
            }`}
            placeholder="Confirmar contraseña"
            required
            autoComplete="off"
            onChange={handleConfirmPasswordChange}
          />
          <span
            className="absolute right-7 bottom-6 text-2xl xl:right-3"
            onClick={handleIsVisibleConfirm}>
            {isVisibleConfirm ? (
              <BiShow className="text-primary-700" />
            ) : (
              <AiOutlineEyeInvisible className="text-primary-700" />
            )}
          </span>
        </label>
      </div>
      {errorMessageForm.error && (
        <div
          role="alert"
          className="rounded border-s-4 border-red-500 bg-red-50 p-4">
          <strong className="block font-medium text-red-800">
            !Error en el formulario¡
          </strong>

          <p className="mt-2 text-sm text-red-700">
            {errorMessageForm.errorMessage}
          </p>
        </div>
      )}
      <div className="w-[310px] h-24 flex flex-col justify-center xl:w-[36.875rem]">
        <button
          type="submit"
          className="w-full h-[3.125rem] rounded-md bg-primary-700 text-white hover:bg-white hover:border border-primary-700 hover:text-primary-700 hover:font-bold transition ease-in-out duration-500
                  ">
          Registrarme
        </button>
      </div>
    </form>
  );
};

export default Form;
