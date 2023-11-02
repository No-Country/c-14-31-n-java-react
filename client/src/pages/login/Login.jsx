import { Link } from "react-router-dom";
import imgLogin from "../../assets/img/login.jpg";
import { useState } from "react";
import { BiError } from "react-icons/bi";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Header from "../../components/header/Header";

const Login = () => {  
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) && /^.{6,12}$/.test(password)) {
      console.log("Campos rellenados");
      document.getElementById("form-message").classList.add("hidden");
      document.getElementById("form-message").classList.remove("block");
      /* =============================================== */
      /* const url = "http://localhost:8080/api.mare.com/user/login"; */
      const url = "https://mare-production.up.railway.app/api.mare.com/user/login";
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      console.log(response);
      const data = await response.json();
      console.log(data);
     
      if (response.status === 200 && response.ok && data.mensaje === "Registro exitoso") {
        alert("Loguin correcto");
        window.location ="/Faq"; 
      }
      if (data.mensaje === "Contraseña Incorrecta") {
        alert("Verifique sus datos de inicio de sesion")
      }
      if(response.status===404){
        alert("Usuario no encontrado");
      }
      /* =============================================== */
    } else {
      console.log("Campos no rellenados correctamente");
      document.getElementById("form-message").classList.remove("hidden");
      document.getElementById("form-message").classList.add("block");
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-screen-2xl flex items-center justify-center min-h-screen m-auto px-20 gap-8 select-none">
        <section className="hidden lg:block w-full flex-1">
          <img
            className="m-auto max-h-full min-h-screen object-cover bg-black"
            src={imgLogin}
            alt="Imagen de portada login"
          />
        </section>
        <article className="flex-1 flex justify-center items-center flex-col">
          <div className=" w-[350px] h-[580px] flex flex-col justify-center items-center gap-5 md:w-[450px]">
            <div className=" w-full flex flex-col justify-center items-center text-center tracking-wide gap-5">
              <h1 className="text-4xl">Iniciar sesión</h1>
              <div>
                <p>¡Qué lindo vernos de nuevo!</p>
                <p>
                  Ingresá tus datos y entera de todas las novedades que tenemos
                  para vos.
                </p>
              </div>
            </div>
            <div className="w-full">
              <form className="flex flex-col gap-5" action="">
                <div className="flex flex-col">
                  <label htmlFor="email">Correo Electronico</label>
                  <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    aria-required="true"
                    className="p-3 h-12 rounded-md sm:text-sm border border-neutral-500 focus:outline-none focus:border-primary-700 focus:border-2 placeholder:italic placeholder:text-neutral-600"
                    type="text"
                    aria-label="Ingrese su correo electronico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex justify-between flex-col relative">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password">Password</label>
                    <Link to={`#`} className="text-primary-700">
                      Olvidé mi contraseña
                    </Link>
                  </div>
                  <input
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    aria-required="true"
                    className="p-3 h-12 rounded-md sm:text-sm bg-neutral-90 border border-neutral-500 focus:outline-none focus:border-primary-700 focus:border-2 placeholder:italic placeholder:text-neutral-600"
                    type={showPassword ? "text" : "password"}
                    aria-label="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="text-primary-700 absolute right-5 top-10 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div id="form-message" className="form-message hidden">
                    <p className="flex items-center text-[12px] text-primary-500">
                      <BiError className="text-[16px]" />
                      <b>Error:</b>&nbsp;Verificar que los campos esten
                      rellenados correctamente
                    </p>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full p-3 h-12 rounded-md text-neutral-50 bg-primary-700 border hover:border-primary-700 hover:bg-neutral-50 hover:text-primary-700 hover:border-2 hover:font-medium transition ease-in-out duration-500">
                    Iniciar sesión
                  </button>
                  <div>
                    <Link to={`#`} className="text-primary-700">
                      ¿No tenés cuenta?
                    </Link>
                    &nbsp;&nbsp;
                    <Link to={`/register`} className="text-primary-700">
                      Registrate
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export { Login };
