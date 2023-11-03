import Header from "../../components/header/Header";
import imgAstronaut from "../../assets/img/error404/astronaut.png";
import imgCow from "../../assets/img/error404/cow-aliens.png";

const NotFound = () => {
  return (
    <main className="max-w-screen-2xl m-auto">
      <Header />
      <section className="w-full md:flex md:flex-row-reverse md:items-center md:h-screen lg:h-[900px]">
        <article className="w-full h-72 lg:h-96">
          <div className="w-4/5 h-48 font-nunito m-auto text-center">
            <p className="text-3xl font-semibold pt-3 lg:text-4xl">UPS!</p>
            <p className="text-3xl font-semibold mb-3 lg:text-4xl">ERROR 404</p>
            <p className="text-lg lg:text-2xl lg:w-2/3 lg:m-auto">
              La página que intentas solicitar no está en el servidor.
            </p>
          </div>
          <div className="w-11/12 m-auto flex justify-end">
            <img
              src={imgCow}
              alt="image cow-aliens"
              className="w-28 md:w-44 lg:w-56"
            />
          </div>
        </article>
        <article className="w-full h-72 lg:h-96">
          <div className="w-11/12 h-72 lg:h-[500px]  m-auto flex  justify-center">
            <img
              src={imgAstronaut}
              alt="image astronaut"
              className="w-full object-contain"
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default NotFound;
