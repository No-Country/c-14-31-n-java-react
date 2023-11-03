import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Accordion } from "./Accordion";
import dataFAQ from "./fag.json"


const Faq = () => {
  return (
    <div className="h-screen min-h-screen flex flex-col">
      <div>
        <Header />
      </div>
      <h1 className="text-center text-lg my-4 lg:mb-8 lg:text-xl 2xl:text-2xl lg:mt-10">Preguntas Frecuentes</h1>
      <section className="lg:max-w-[1400px] lg:mx-auto lg:border lg:p-7 border-primary-700 lg:rounded-tr-[20px] lg:rounded-bl-[20px] md:m-10">
        {dataFAQ.map(ask =>
          <Accordion
            key={ask.id}
            title={ask.title}
            description={ask.description} />
        )}
      </section>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}


export default Faq