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
import { useModal } from "../../hooks/useModal";

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
      className="max-w-screen-2xl h-[4.5625rem] flex justify-between items-center m-auto relative bg-neutral-50 lg:justify-around"
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
          <div className="lg:w-3/4 lg:flex lg:justify-center xl:w-4/5">
            <Link
              to={"/"}
              className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-neutral-900 ">
              <span className="font-medium"> Inicio </span>
            </Link>

            <Link
              to="/aboutUs"
              className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-neutral-900">
              <span className="font-medium"> Nosotros </span>
            </Link>

            <Link
              to="/faq"
              className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-neutral-900">
              <span className="font-medium">FAQ</span>
            </Link>

            <Link
              to={"/store"}
              className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-neutral-900">
              <span className="font-medium text-primary-500">Tienda</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-gray-700 lg:relative">
              <span className="font-medium"> Contacto</span>
            </Link>
          </div>

          <div className="lg:w-2/5 lg:flex lg:justify-around 2xl:w-1/4">
            <Link
              to={"/register"}
              className="flex items-center gap-2 lg:gap-x-1 rounded-md px-4 py-2 text-neutral-900 lg:border lg:border-primary-700 lg:text-white lg:relative  lg:bg-primary-700 lg:hover:text-primary-700 hover:bg-white
               hover:text-primary-700 transition ease-in-out duration-500 ">
              <span className="font-medium lg:font-normal">Registrarse</span>
            </Link>

            <Link
              to={"/login"}
              className="flex items-center gap-2 lg:gap-x-1 rounded-md px-4 py-2 text-neutral-900 lg:border lg:border-primary-700 lg:text-white lg:relative  lg:bg-primary-700 lg:hover:text-primary-700 hover:bg-white
               hover:text-primary-700 transition ease-in-out duration-500 ">
              <span className="font-medium lg:font-normal">
                Inicio de Sesión
              </span>
            </Link>
          </div>

          {/*<Link
            className="flex items-center gap-2 lg:gap-x-1 rounded-lg px-4 py-2 text-gray-700"
            to={"/register"}>
            <AiOutlgitineUser className="text-2xl" />
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
