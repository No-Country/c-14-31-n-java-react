import { useState } from "react";

const useGetName = () => {
  const error = {
    name: {
      error: false,
      messageError:
        "El campo nombre no puede ir vacio, solo acepta letras y espacios en blanco",
    },
    lastName: {
      error: false,
      messageError:
        "El campo apellido no puede ir vacio, solo acepta letras y espacios en blanco",
    },
    address: {
      error: false,
      messageError:
        "El campo dirección no puede ir vacio, acepta letras, números y espacios en blanco",
    },
    phone: {
      error: false,
      messageError: "El campo teléfono no puede ir vacio, solo acepta números",
    },
    email: {
      error: false,
      messageError:
        "El campo email no puede ir vacio, acepta letras, números y espacios en blanco",
    },
    password: {
      error: false,
      messageError:
        "El campo password no puede ir vacio, no acepta signos < > =",
    },
    confirm: {
      error: false,
      messageError: "El password no es el mismo",
    },
  };
  const [errorInput] = useState(error);

  function getName(name, inputValue) {
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexAddress = /^[a-zA-Z0-9áéíóúüÜñÑ, -]+$/;
    const regexPhone = /^\d{10}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPass = /^[^<>]*$/;

    if (name === "name") {
      const isNameValid = !regexName.test(inputValue);
      errorInput.name.error = isNameValid;
    }
    if (name === "lastName") {
      const isNameValid = !regexName.test(inputValue);
      errorInput.lastName.error = isNameValid;
    }
    if (name === "address") {
      const isNameValid = !regexAddress.test(inputValue);
      errorInput.address.error = isNameValid;
    }
    if (name === "phone") {
      const isNameValid = !regexPhone.test(inputValue);
      errorInput.phone.error = isNameValid;
    }
    if (name === "email") {
      const isNameValid = !regexEmail.test(inputValue);
      errorInput.email.error = isNameValid;
    }
    if (name === "password") {
      const isNameValid = !regexPass.test(inputValue);
      errorInput.password.error = isNameValid;
    }
  }

  return { getName, errorInput };
};

export default useGetName;
