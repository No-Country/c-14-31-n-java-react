import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineCloseCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import LOGO from "../../assets/img/logo.png";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuRef = useRef(null);

  const handleOutsideClick = (e) => {
    // Verificar si el clic ocurrió fuera del menú
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    // Agregar el evento al montar el componente
    document.addEventListener("mousedown", handleOutsideClick);

    // Eliminar el evento al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header
      className="max-w-screen-2xl h-[4.5625rem] flex justify-between items-center m-auto  relative bg-neutral-50 lg:justify-around"
      ref={menuRef}>
      <div className="w-[13.5rem] h-[4.25rem] mx-3">
        <Link to={"/"}>
          <img src={LOGO} alt="logo-indumentaria-mare" />
        </Link>
      </div>

      <div className="flex lg:hidden">
        {/*<button className="text-2xl">
          <BsCart3 />
        </button>*/}

        <button onClick={handleToggle} className="mx-3 text-4xl">
          {toggleMenu ? <AiOutlineCloseCircle /> : <RxHamburgerMenu />}
        </button>
      </div>

      <nav
        className={`w-3/4 absolute top-[4.5625rem] transition-all duration-500 ease-in-out z-50  bg-neutral-50 ${
          toggleMenu ? "left-0" : "-left-full"
        } lg:left-0 lg:w-3/4 lg:h-[4.5625rem] lg:top-0 lg:relative lg:flex lg:items-center lg:text-sm`}>
        <ul className="space-y-1 lg:space-y-0 lg:flex lg:w-full xl:justify-between ">
          <div className="lg:w-3/5 lg:flex lg:justify-center xl:w-4/5">
            <Link
              to={"/"}
              className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-neutral-900 ">
              <span className="font-medium"> Inicio </span>
            </Link>

<<<<<<< HEAD
            <li className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-neutral-900">
              <span className="font-medium"> Nosotros </span>
            </li>

            <li className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-neutral-900">
              <span className="font-medium">FAQ</span>
            </li>
=======
          <Link to="/aboutUs" className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-neutral-900">
            <span className="font-medium"> Nosotros </span>
          </Link>

          <Link to="/faq" className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-neutral-900">
            <span className="font-medium">FAQ</span>
          </Link>
>>>>>>> 7caa19309d8be7b0e444c8ace9437ff315859d6d

            <Link
              to={"/store"}
              className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-neutral-900">
              <span className="font-medium text-primary-500">Tienda</span>
            </Link>

            {/*<li className="lg:flex lg:items-center">
            <details className=" group [&_summary::-webkit-details-marker]:hidden  lg:relative">
              <summary className="group flex items-center justify-between rounded-lg px-4 py-2  text-primary-300 ">
                <div className="flex items-center gap-2 lg:gap-x-2">
                  <span className="font-medium"> Tienda </span>
                </div>

                <span
                  className={`shrink-0 transition duration-300 group-open:-rotate-180  `}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 bg-neutral-300   lg:mt-3 lg:w-36 lg:px-3 lg:py-4 lg:absolute lg:bg-neutral-100">
                <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
                  Remeras
                </li>

                <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
                  Camperas
                </li>

                <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
                  Jeans
                </li>
                <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
                  Pantalones
                </li>

                <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
                  Conjuntos
                </li>
              </ul>
            </details>
          </li>*/}

<<<<<<< HEAD
            <li className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-gray-700 lg:relative ">
              <span className="font-medium"> Contacto</span>
            </li>
          </div>

          <div className="lg:w-2/5 lg:flex lg:justify-around xl:w-1/4">
            <Link
              to={"/register"}
              className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-gray-700 lg:relative border bg-primary-700 lg:text-white lg:hover:bg-white lg:hover:border-primary-700  lg:hover:text-primary-700 transition ease-in-out duration-500 ">
              <span className="font-medium">Registrarse</span>
            </Link>
            <Link
              to={"/login"}
              className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-gray-700 lg:relative border bg-primary-700 lg:bg-primary-700 lg:text-white lg:hover:bg-white lg:hover:text-primary-700 transition ease-in-out duration-500">
              <span className="font-medium">Inicio de Sesión</span>
            </Link>
          </div>
=======
          <Link to="/contact" className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-gray-700 lg:relative ">
            <span className="font-medium"> Contacto</span>
          </Link>
          <Link
            to={"/register"}
            className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-gray-700 lg:relative ">
            <span className="font-medium">Registrarse</span>
          </Link>
          <Link
            to={"/login"}
            className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-gray-700 lg:relative ">
            <span className="font-medium">Inicio de Sesión</span>
          </Link>
>>>>>>> 7caa19309d8be7b0e444c8ace9437ff315859d6d

          {/*<Link
            className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-gray-700"
            to={"/register"}>
            <AiOutlineUser className="text-2xl" />
            <span className="font-medium">Mi Cuenta</span>
          </Link>*/}
        </ul>
      </nav>

      {/*<div className="w-12 h-12 absolute right-2 -bottom-12 grid place-content-center rounded-full  bg-primary-500">
        <button className="text-2xl text-white ">
          <BsCart3 />
        </button>
      </div>*/}
    </header>
  );
};

export default Header;
