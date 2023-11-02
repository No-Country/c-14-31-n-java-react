import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-auto p-2 bg-primary-700 flex justify-center items-center select-none">
      <div className="max-w-screen-2xl  flex flex-col justify-center items-center m-auto">
        <div className="w-32 text-[1.3rem] h-auto flex justify-evenly items-center">
          <Link to="https://www.instagram.com/mareindumentariamdp/" target="_blank">
            <BsInstagram className="hover:text-neutral-400 transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300 cursor-pointer" />
          </Link>
          <Link to="https://www.facebook.com/mareindumentaria/" target="_blank">
            <BsFacebook className="hover:text-neutral-400 transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300 cursor-pointer" />
          </Link>
          <Link to="https://api.whatsapp.com/send/?phone=5492234399798&text&type=phone_number&app_absent=0" target="_blank">
            <BsWhatsapp className="hover:text-neutral-400 transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300 cursor-pointer" />
          </Link>
        </div>
        <div>
          <p className="text-neutral-400 text-[12px]">
            &copy; Copyright 2023. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
