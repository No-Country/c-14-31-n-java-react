import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import logoAboutUs from "../../assets/img/AboutUsLogo1.png";
import waterMark from "../../assets/img/logo-mare.png";


const AboutUs = () => {
    return (
        <div className="h-screen min-h-screen flex flex-col">
            <div>
                <Header />
            </div>
            <h1 className="text-2xl text-center font-cormorant text-primary-700 font-bold">Nosotros</h1>
            <div className="px-8 py-3 md:w-2/5 md:mx-auto">
                <img src={logoAboutUs} alt="logo" className="w-full" />
            </div>
            <h2 className="font-cormorant text-lg text-center">Indumentaria informal para mujeres reales</h2>
            <div className="relative md:bg-[#D9D9D91A] md:mx-auto md:border-x md:border-primary-700 md:border-b md:rounded-tr-[1.4rem] md:rounded-bl-[1.4rem] md:w-10/12 mb-8">
                <p className="text-center text-nunito text-xl my-4 mx-6 md:mx-10 md">Somos una orgullosa empresa marplatense que ha forjado una sólida trayectoria durante más de tres décadas. Desde nuestros humildes comienzos, nos hemos dedicado con pasión al diseño y fabricación de productos innovadores y de alta calidad.
                    A lo largo de los años, hemos evolucionado y crecido, siempre enfocados en ofrecer a nuestros clientes soluciones excepcionales. Nuestra historia se ha tejido con cada desafío superado y cada logro alcanzado. Hoy, somos una fuente de inspiración en el campo de la moda, reconocidos por nuestra dedicación, experiencia y compromiso con la excelencia.
                    Nuestro equipo de profesionales altamente capacitados y apasionados por lo que hacemos es el corazón de nuestra empresa.
                    Trabajamos incansablemente para llevar a cabo proyectos que transforman ideas en realidad.
                    Cada diseño que creamos es una manifestación de nuestra creatividad y experiencia técnica.
                    En estos más de 35 años, hemos tenido el honor de servir a una amplia gama de clientes y hemos establecido relaciones duraderas basadas en la confianza y la satisfacción.
                    Nos enorgullece no solo nuestra historia, sino también el compromiso continuo de nuestra empresa con la innovación y la calidad. Seguimos mirando hacia el futuro con entusiasmo, siempre buscando nuevas oportunidades para superar los estándares y superar las expectativas.
                    A medida que avanzamos en nuestro viaje, seguimos siendo una empresa marplatense arraigada en nuestros valores fundamentales: integridad, creatividad y servicio excepcional.</p>
                    <img src={waterMark} alt="water mark" className="absolute bottom-24 right-6 opacity-50 h-32 md:h-44"/>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs