import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import mapLocation from "../../assets/img/mapLocation.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import imgLogo from "../../assets/img/logo-mare.png";

const Contact = () => {
  const [emailSus, setEmailSus] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setEmailSus(e.target.value);
  };
  const [iframeError, setIframeError] = useState(false);
  return (
    <div className="min-h-screen">
      <Header />
      <div className="md:flex justify-around">
        <div>
          <h2 className="text-center font-nunito mt-8 lg:text-3xl">
            Seguinos en nuestras redes sociales
          </h2>
          <article className="flex justify-between mx-auto mt-4 max-w-[200px]">
            <Link
              to="https://api.whatsapp.com/send/?phone=5492234399798&text&type=phone_number&app_absent=0"
              target="_blank">
              <BsWhatsapp className="h-6 w-6 text-[#61B75F]" />
            </Link>
            <Link
              to="https://www.facebook.com/mareindumentaria/"
              target="_blank">
              <FaFacebookF className="h-6 w-6 text-[#434AE0]" />
            </Link>
            <Link
              to="https://www.instagram.com/mareindumentariamdp/"
              target="_blank">
              <BsInstagram className="h-6 w-6 text-[#B422A5]" />
            </Link>
          </article>
          <div className="flex justify-center">
            <div>
              <div className="flex ml-10 mt-8">
                <BsTelephone className="h-6 w-6 text-[#2B16AB]" />
                <span className="font-nunito pl-6 lg:text-xl">223_5552513</span>
              </div>
              <div className="flex items-center ml-10 mt-3">
                <GrLocation className="h-6 w-6 text-[#BE0D0D]" />
                <div className="flex flex-col pl-6 pr-10">
                  <span className="font-nunito lg:text-xl">
                    Córdoba 2035, Mar del Plata,
                  </span>
                  <span className="font-nunito lg:text-xl">
                    Prov. Buenos Aires, Argentina.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2 lg:w-[36rem] max-w-md mx-auto">
            {!iframeError ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.9278218687236!2d-57.549193300000006!3d-38.002144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc1cf2611429%3A0xf9d1af1854d6add8!2sC%C3%B3rdoba%202035%2C%20B7600DVQ%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2smx!4v1698820992894!5m2!1ses-419!2smx"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-11/12 h-[350px] md:w-full md:h-[300px] lg:h-[450px]"
                onError={() => setIframeError(true)}></iframe>
            ) : (
              <img
                src={mapLocation}
                alt="Ubicación croqui"
                className="w-full"
              />
            )}
          </div>
        </div>
        <div className="my-6">
          <form className="bg-primary-700/[.8] rounded-[1.25rem] w-80 h-[30rem] mx-auto lg:w-[520px] lg:h-[670px]">
            <h3 className="text-center font-nunito text-neutral-50/[.6] text-sm leading-7 pt-8 lg:text-3xl">
              Estemos en contacto, dejanos tu consulta.
            </h3>
            <div className="flex flex-col mx-2">
              <label className="text-neutral-50/[.6] text-sm leading-7 lg:text-base lg:mt-6">
                Nombre
              </label>
              <input
                type="text"
                className="rounded h-12 pl-3 placeholder:text-sm placeholder:text-[#D2D2D2]"
                placeholder="Nombre"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mx-2">
              <label className="text-neutral-50/[.6] text-sm leading-7 lg:text-base lg:mt-6">
                Corre electrónico
              </label>
              <input
                type="text"
                className="rounded h-12 pl-3 placeholder:text-sm placeholder:text-[#D2D2D2]"
                placeholder="Correo electrónico"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mx-2">
              <label className="text-neutral-50/[.6] text-sm leading-7 lg:text-base lg:mt-6">
                Dejanos tu mensaje.
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="rounded h-[8.25rem] pl-3 pt-3 placeholder:text-sm placeholder:text-[#D2D2D2] lg:h-44 resize-none"
                placeholder="Dejanos tu mensaje"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}></textarea>
            </div>
            {name !== "" &&
            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(mail) &&
            message !== "" ? (
              <div className="mx-2 lg:mt-6">
                <Link
                  to={`mailto:email@example.com?subject=Nombre:%20${name}%20correo:${mail}&body=${message}`}>
                  <button
                    type="button"
                    className="bg-primary-700 text-neutral-50 h-12 w-full rounded mt-2 lg:mt-5">
                    Enviar
                  </button>
                </Link>
              </div>
            ) : (
              <div className="mx-2 lg:mt-6">
                <button
                  type="button"
                  className="bg-primary-700 text-neutral-50 h-12 w-full rounded mt-2 lg:mt-5 opacity-50">
                  Enviar
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="text-center w-full h-[9.375rem] border-y-[0.5px] border-neutral-700 md:flex md:justify-evenly relative bg-[#D9D9D9] bg-opacity-[20%] md:items-center">
        <img
          src={imgLogo}
          alt=""
          className="hidden md:inline absolute opacity-75 left-3 top-8"
        />
        <div>
          <h2 className="pt-3 md:text-2xl md:pt-0">
            ¡SUSCRIBETE A NUESTRO NEWSLETTER!
          </h2>
          <h3 className="md:text-2xl">
            ¡y enterate de todas nuestras ofertas y novedades!
          </h3>
        </div>
        <div className="pt-9 flex justify-evenly md:pt-0">
          <input
            type="text"
            placeholder="Ingresá tu correo electrónico"
            className="h-8 w-[11.25rem] border placeholder:text-xs placeholder:text-center rounded-md md:h-10 md:w-52 md:placeholder-text-sm"
            onChange={handleChange}
          />
          {/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(
            emailSus
          ) ? (
            <Link to="mailto:email@example.com?subject=suscripcion%20a%20ofertas%20y%20novedades&body=Hola, estoy interesado en recibir ofertas y novedades de la marca">
              <button className="w-[7.5rem] h-[1.875rem] text-center bg-primary-700 text-white rounded-md md:h-10 md:ml-8">
                Suscribirse
              </button>
            </Link>
          ) : (
            <button className="w-[7.5rem] h-[1.875rem] text-center bg-primary-700 text-white rounded-md opacity-50 md:h-10 md:ml-8">
              Suscribirse
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
