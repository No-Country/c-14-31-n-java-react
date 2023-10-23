import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { IoIosArrowDown } from "react-icons/io";


const Faq = () => {
    return (
        <div className="h-screen min-h-screen flex flex-col">
            <div>
                <Header />
            </div>
            <div className="w-full flex justify-center items-center h-full">
                <div className="max-w-md md:mx-auto">
                    <div className="border-y-2 border-neutral-400">
                        <h2 className="text-primary-700 text-center font-bold text-xl">Lorem ipsum dolor sit amet?</h2>
                        <p className="text-center py-2">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit..</p>
                    </div>
                    <div className="border-b-2 border-neutral-400">
                        <h2 className="text-primary-700 text-center font-bold text-xl">Lorem ipsum dolor sit amet?</h2>
                        <p className="text-center py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione amet doloribus quod nobis?</p>
                    </div>
                    <div className="border-b-2 border-neutral-400">
                        <h2 className="text-primary-700 text-center font-bold text-xl">Lorem ipsum dolor sit amet?</h2>
                        <p className="text-center py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur recusandae quod eos blanditiis quisquam inventore.</p>
                    </div>
                    <div className="border-b-2 border-neutral-400">
                        <h2 className="text-primary-700 text-center font-bold text-xl">Lorem ipsum dolor sit amet?</h2>
                        <p className="text-center py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}


export default Faq