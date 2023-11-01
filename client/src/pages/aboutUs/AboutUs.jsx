import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";


const AboutUs = () => {
    return (
        <div className="h-screen min-h-screen flex flex-col">
            <div>
                <Header />
            </div>
            <h1 className="text-7xl text-center font-cormorant text-primary-700 font-bold">¿Quienes Somos?</h1>
            <p className="text-center text-nunito text-xl my-8 mx-6 md:mx-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore adipisci deserunt dolorum, eos consectetur tenetur soluta, alias iusto quibusdam voluptate ullam, quidem itaque reprehenderit dicta dolore est. Assumenda, dolorum quia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor, soluta illo cupiditate iure quo accusantium molestias</p>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs