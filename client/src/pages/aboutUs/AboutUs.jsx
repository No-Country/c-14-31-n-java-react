import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import imgAboutMe from "../../assets/img/aboutMe/aboutMe.png";
import imgMovilAboutMe from "../../assets/img/aboutMe/movilAboutMe.png";
import logo from "../../assets/img/aboutMe/logo-circular.png";

const AboutUs = () => {
  return (
    <main className="h-screen min-h-screen flex flex-col ">
      <div>
        <Header />
      </div>
      <h1 className="text-5xl text-center font-bold my-3 font-cormorant">
        Nosotros
      </h1>
      <div className="relative font-cormorant">
        <figure className="w-full flex flex-col items-center lg:absolute">
          <img
            src={imgMovilAboutMe}
            alt="logo mare"
            className="w-[80%] md:w-[50%] lg:hidden "
          />
          <img
            src={imgAboutMe}
            alt="logo mare"
            className="hidden lg:block lg:w-[60%] xl:w-[30%]"
          />
          <p className="text-center pt-3 font-bold lg:hidden">
            Indumentaria informal para mujeres reales
          </p>
        </figure>
        <div className="text-nunito text-xl my-8 mx-6 md:mx-32 relative z-20 lg:mt-36 lg:px-12 lg:py-10 lg:border lg:border-t-0 lg:border-primary-700 lg:rounded-bl-3xl lg:rounded-tr-3xl xl:w-3/4 xl:m-auto xl:mt-36 xl:font-semibold">
          <p>
            Somos una orgullosa empresa marplatense que ha forjado una sólida
            trayectoria durante más de tres décadas. Desde nuestros humildes
            comienzos, nos hemos dedicado con pasión al diseño y fabricación de
            productos innovadores y de alta calidad.
          </p>
          <p>
            A lo largo de los años, hemos evolucionado y crecido, siempre
            enfocados en ofrecer a nuestros clientes soluciones excepcionales.
          </p>
          <p>
            Nuestra historia se ha tejido con cada desafío superado y cada logro
            alcanzado. Hoy, somos una fuente de inspiración en el campo de la
            moda, reconocidos por nuestra dedicación, experiencia y compromiso
            con la excelencia. Nuestro equipo de profesionales altamente
            capacitados y apasionados por lo que hacemos es el corazón de
            nuestra empresa.
          </p>
          <p>
            Trabajamos incansablemente para llevar a cabo proyectos que
            transforman ideas en realidad. Cada diseño que creamos es una
            manifestación de nuestra creatividad y experiencia técnica. En estos
            más de 35 años, hemos tenido el honor de servir a una amplia gama de
            clientes y hemos establecido relaciones duraderas basadas en la
            confianza y la satisfacción.
          </p>
          <p>
            Nos enorgullece no solo nuestra historia, sino también el compromiso
            continuo de nuestra empresa con la innovación y la calidad.
          </p>
          <p>
            Seguimos mirando hacia el futuro con entusiasmo, siempre buscando
            nuevas oportunidades para superar los estándares y superar las
            expectativas.
          </p>
          <p>
            A medida que avanzamos en nuestro viaje, seguimos siendo una empresa
            marplatense arraigada en nuestros valores fundamentales: integridad,
            creatividad y servicio excepcional.
          </p>
        </div>
        <img
          src={logo}
          alt="logo mare"
          className="absolute bottom-36 right-7 z-10 md:right-36 xl:md:right-80"
        />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
};

export default AboutUs;
