import { BsCart3 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <header className="w-full h-16 flex justify-evenly items-center  bg-red-300">
      <div>
        <p>Logoa</p>
      </div>

      <nav className="w-1/2">
        <ul className="flex justify-evenly">
          <li>Inicio</li>
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
        <AiOutlineUser />
        <BsCart3 />
      </div>
    </header>
  );
};

export default Header;
