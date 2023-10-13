import { BsCart3 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import LOGO from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="max-w-screen-2xl h-[4.5625rem] flex justify-evenly items-center  bg-red-300">
      <div className="w-[216px] h-[68px]">
        <Link to={"/"}>
          <img src={LOGO} alt="logo-indumentaria-mare" />
        </Link>
      </div>

      <nav className="w-1/2">
        <ul className="flex justify-evenly">
          <Link to={"/"}>Inicio</Link>
          <li>Nosotros</li>
          <li>Preguntas Frecuentes</li>
          <li>Tienda</li>
          <li>Contacto</li>
        </ul>
      </nav>

      <div>
        <input type="text" />
      </div>

      <div className="w-16 text-2xl flex justify-between">
        <Link to={"/register"}>
          <AiOutlineUser />
        </Link>
        <BsCart3 />
      </div>
    </header>
  );
};

export default Header;
