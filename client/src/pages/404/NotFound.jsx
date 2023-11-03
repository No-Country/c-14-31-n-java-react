import Header from "../../components/header/Header";
import imgAstronaut from "../../assets/img/error404/astronaut.png";
import imgCow from "../../assets/img/error404/cow-aliens.png";

const NotFound = () => {
  return (
    <main className="max-w-screen-2xl m-auto">
      <Header />
      <section className="w-full md:w-4/5 md:h-[500px]  md:m-auto md:flex  md:items-center lg:h-[700px]">
        <article className="w-full h-72 lg:h-96 ">
          <div className="w-11/12 h-72 lg:h-[500px] relative flex items-center  m-auto md:justify-center">
            <img
              src={imgAstronaut}
              alt="image astronaut"
              className="w-[60%] object-contain md:w-[100%]"
            />
            <div className="w-3/5 right-0 absolute text-center md:hidden">
              <p className="text-3xl font-semibold pt-3 lg:text-4xl">UPS!</p>
              <p className="text-3xl font-semibold mb-3 lg:text-4xl">
                ERROR 404
              </p>
            </div>
          </div>
        </article>
        <article className="w-full lg:h-96">
          <div className="w-4/5  font-nunito m-auto text-center md:text-left">
            <div className="hidden md:block">
              <p className="text-3xl font-semibold pt-3 lg:text-4xl">UPS!</p>
              <p className="text-3xl font-semibold mb-3 lg:text-4xl">
                ERROR 404
              </p>
            </div>
            <p className="text-2xl">
              La página que intentas solicitar no está en el servidor.
            </p>
          </div>
          <div className="w-11/12 m-auto flex items-start justify-center md:justify-end ">
            <img
              src={imgCow}
              alt="image cow-aliens"
              className="w-[70%] object-cover"
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default NotFound;
