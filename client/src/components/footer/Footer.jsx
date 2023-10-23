import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full h-auto p-2 bg-primary-700 flex justify-center items-center select-none">
      <div className="max-w-screen-2xl  flex flex-col justify-center items-center m-auto">
        <div className="w-32 text-[1.3rem] h-auto flex justify-evenly items-center">
          <BsInstagram className="hover:text-neutral-400 transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300 cursor-pointer" />
          <BsFacebook className="hover:text-neutral-400 transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300 cursor-pointer" />
          <BsWhatsapp className="hover:text-neutral-400 transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300 cursor-pointer" />
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
