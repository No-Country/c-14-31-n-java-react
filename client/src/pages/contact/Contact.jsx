import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import mapLocation from "../../assets/img/mapLocation.png"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Contact = () => {
    const handleSubmit = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'mensaje enviado',
            showConfirmButton: false,
            timer: 1500
        })
            .then(() => {
                location.reload()
            })
    }
    return (
        <div className="min-h-screen">
            <Header />
            <div className="md:flex justify-around">
                <div>
                    <h2 className="text-center font-nunito mt-8 lg:text-3xl">Seguinos en nuestras redes sociales</h2>
                    <article className="flex justify-between mx-auto mt-4 max-w-[200px]">
                        <Link to="https://api.whatsapp.com/send?phone=111111111" target="_blank">
                            <BsWhatsapp className="h-6 w-6" />
                        </Link>
                        <Link to="https://www.facebook.com/mareindumentaria/" target="_blank">
                            <FaFacebookF className="h-6 w-6" />
                        </Link>
                        <Link to="https://www.instagram.com/mareindumentariamdp/" target="_blank">
                            <BsInstagram className="h-6 w-6" />
                        </Link>
                    </article>
                    <div className="flex justify-center">
                        <div>
                            <div className="flex ml-10 mt-8">
                                <BsTelephone className="h-6 w-6" />
                                <span className="font-nunito pl-6 lg:text-xl">223_5552513</span>
                            </div>
                            <div className="flex items-center ml-10 mt-3">
                                <GrLocation className="h-6 w-6" />
                                <div className="flex flex-col pl-6 pr-10">
                                    <span className="font-nunito lg:text-xl">Córdoba 2035, Mar del Plata,</span>
                                    <span className="font-nunito lg:text-xl">Prov. Buenos Aires, Argentina.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-2 lg:w-[36rem]">
                        <img src={mapLocation} alt="Ubicación croqui" className="w-full"/>
                    </div>
                </div>
                <div className="my-6">
                    <form className="bg-primary-700/[.8] rounded-[1.25rem] w-80 h-[30rem] mx-auto lg:w-[520px] lg:h-[670px]">
                        <h3 className="text-center font-nunito text-neutral-50/[.6] text-sm leading-7 pt-8 lg:text-3xl">Estemos en contacto, dejanos tu consulta.</h3>
                        <div className="flex flex-col mx-2">
                            <label className="text-neutral-50/[.6] text-sm leading-7 lg:text-base lg:mt-6">Nombre</label>
                            <input type="text" className="rounded h-12 pl-3 placeholder:text-sm placeholder:text-[#D2D2D2]" placeholder="Nombre" />
                        </div>
                        <div className="flex flex-col mx-2">
                            <label className="text-neutral-50/[.6] text-sm leading-7 lg:text-base lg:mt-6">Corre electrónico</label>
                            <input type="text" className="rounded h-12 pl-3 placeholder:text-sm placeholder:text-[#D2D2D2]" placeholder="Correo electrónico" />
                        </div>
                        <div className="flex flex-col mx-2">
                            <label className="text-neutral-50/[.6] text-sm leading-7 lg:text-base lg:mt-6">Dejanos tu mensaje.</label>
                            <textarea name="" id="" cols="30" rows="10" className="rounded h-[8.25rem] pl-3 pt-3 placeholder:text-sm placeholder:text-[#D2D2D2] lg:h-44 resize-none" placeholder="Dejanos tu mensaje"></textarea>
                        </div>
                        <div className="mx-2 lg:mt-6">
                            <button type="button" onClick={handleSubmit} className="bg-primary-700 text-neutral-50 h-12 w-full rounded mt-2 lg:mt-5">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact