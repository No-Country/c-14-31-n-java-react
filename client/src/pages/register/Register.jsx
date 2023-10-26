import IMGREGISTER from "../../assets/img/register.png";
import Form from "./Form";
import Header from "../../components/header/Header";

const Register = () => {
  return (
    <main className="max-w-screen-2xl m-auto">
      <Header />

      <section className="m-auto w-full h-full flex  items-center">
        <article className="hidden lg:block lg:ml-32 lg:mr-10">
          <div className="lg:w-[30.75rem] lg:h-[59.4375rem]  m-auto">
            <img
              className="w-full h-full"
              src={IMGREGISTER}
              alt="image-register"
            />
          </div>
        </article>

        <article className="w-full mt-5 font-nunito relative lg:w-1/2">
          <div className="w-11/12 h-4/5 m-auto">
            <div className="my-5 text-center xl:text-left">
              <h2 className="text-2xl my-3 mb-8 font-semibold">Registrate</h2>
              <p>!Sumate a nuestra comunidad¡</p>
              <p>
                Te compartiremos promociones descuentos y nuevos lanzamientos
              </p>
            </div>
            <Form />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Register;
