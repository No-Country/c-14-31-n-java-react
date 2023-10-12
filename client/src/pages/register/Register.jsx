const Register = () => {
  return (
    <section className="w-full h-screen  flex items-center">
      <div className="w-1/2 h-80  bg-red-200">
        <p>Imagen</p>
      </div>

      <div className="w-1/2 flex flex-col items-center  bg-slate-400">
        <div>
          <h2 className="text-2xl font-bold">Registrate</h2>
          <p>!Sumate a nuestra comunidad¡</p>
          <p>Te compartiremos promociones descuentos y nuevos lanzamientos</p>
        </div>
        <form className="w-56 flex-col items-start  bg-yellow-700">
          <label htmlFor="name">
            Nombre
            <input type="text" id="name" className="" />
          </label>
          <label htmlFor="last-name">
            Apellidos
            <input type="text" id="last-name" />
          </label>
          <label htmlFor="address">
            Dirección
            <input type="text" id="address" />
          </label>
          <label htmlFor="email">
            Correo electrónico
            <input type="text" id="email" />
          </label>
          <label htmlFor="password">
            Contraseña
            <input type="password" id="password" />
          </label>
          <label htmlFor="confirm">
            Confirmar contraseña
            <input type="password" id="confirm" />
          </label>
        </form>

        <div>
          <label htmlFor="">
            Deseo recibir ofertas por email
            <input type="checkbox" />
          </label>
          <button>Registrarme</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
