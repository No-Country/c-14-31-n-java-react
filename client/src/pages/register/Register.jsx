import LOGO from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="max-w-screen-2xl m-auto">
      <header className="h-[4.5625rem] flex items-center  bg-red-300">
        <div className="w-[13.5rem] h-[4.25rem]">
          <Link to={"/"}>
            <img src={LOGO} alt="logo-indumentaria-mare" />
          </Link>
        </div>
      </header>

      <section className=" m-auto w-full h-full flex  items-center">
        <article className="hidden lg:block lg:w-1/2 ">
          <div className="w-[518px] h-[518px] bg-slate-400 m-auto">Imagen</div>
        </article>

        <article className="w-full mt-5 font-nunito lg:w-1/2">
          <div className="w-11/12 h-4/5 m-auto">
            <div className="my-5 text-center">
              <h2 className="text-2xl my-3 mb-8  font-semibold">Registrate</h2>
              <p>!Sumate a nuestra comunidad¡</p>
              <p>
                Te compartiremos promociones descuentos y nuevos lanzamientos
              </p>
            </div>
            <form className="w-[21.875rem] mb-10 mx-auto flex-col items-start">
              <label htmlFor="name">
                Nombre <span className="text-red-500">*</span>
                <input
                  type="text"
                  id="name"
                  className="w-[19.375rem] h-[3.125rem] border-2 border-zinc-300 rounded-md p-2 mt-1 mb-3"
                  placeholder="Nombre"
                />
              </label>
              <label htmlFor="last-name">
                Apellido <span className="text-red-500">*</span>
                <input
                  type="text"
                  id="last-name"
                  className="w-[19.375rem] h-[3.125rem] border-2 border-zinc-300  rounded-md p-2 mt-1 mb-3"
                  placeholder="Apellido"
                />
              </label>
              <label htmlFor="address">
                Dirección <span className="text-red-500">*</span>
                <input
                  type="text"
                  id="address"
                  className="w-[19.375rem] h-[3.125rem] border-2 border-zinc-300  rounded-md p-2 mt-1 mb-3"
                  placeholder="Dirección"
                />
              </label>
              <label htmlFor="phone">
                Número de Teléfono <span className="text-red-500">*</span>
                <input
                  type="text"
                  id="phone"
                  className="w-[19.375rem] h-[3.125rem] border-2 border-zinc-300  rounded-md p-2 mt-1 mb-3"
                  placeholder=" Número de Teléfono"
                />
              </label>
              <label htmlFor="email">
                Correo electrónico <span className="text-red-500">*</span>
                <input
                  type="text"
                  id="email"
                  className="w-[19.375rem] h-[3.125rem] border-2 border-zinc-300  rounded-md p-2 mt-1 mb-3"
                  placeholder="Correo Electrónico"
                />
              </label>
              <label htmlFor="password">
                Contraseña <span className="text-red-500">*</span>
                <input
                  type="password"
                  id="password"
                  className="w-[19.375rem] h-[3.125rem] border-2 border-zinc-300  rounded-md p-2 mt-1 mb-3"
                  placeholder="Contraseña"
                />
              </label>
              <label htmlFor="confirm">
                Confirmar contraseña <span className="text-red-500">*</span>
                <input
                  type="password"
                  id="confirm"
                  className="w-[19.375rem] h-[3.125rem] border-2 border-zinc-300  rounded-md p-2 mt-1 mb-3"
                  placeholder="Confirmar contraseña"
                />
              </label>
            </form>
            <div className="h-24 flex flex-col justify-evenly items-center lg:w-[21.875rem] lg:m-auto  lg:items-start">
              <label htmlFor="email-checkbox" className="px-3 pb-2">
                <input type="checkbox" id="email-checkbox" className="m-2" />
                Deseo recibir ofertas por email
              </label>
              <button className="w-[6.9375rem] h-[3.125rem]  rounded-md bg-primary-700 text-white lg:w-[19.375rem]">
                Registrarme
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Register;
