import { useState } from "react";
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import { BsCart3, BsHeart } from "react-icons/bs";

import blusa from "../../assets/img/blusa.png";

import img from "../../assets/img/gamaColoresExample.png";

import useFetchAllCategories from "../../services/useFetchAllCategories";

const Store = () => {
  const [category, setCategory] = useState("");

  const { allCategories } = useFetchAllCategories();

  //console.log(allCategories);

  const handleChangeCategory = (e) => {
    const categoryOption = e.target.value;
    setCategory(categoryOption);
  };

  console.log(category);

  return (
    <main className="max-w-screen-2xl m-auto">
      <Header />
      <section className="flex relative ">
        <article className="w-full absolute md:w-1/4 md:sticky md:top-0 md:bg-secondary-200">
          <ul>
            <li className="lg:flex lg:items-center  bg-secondary-200">
              <details className=" group [&_summary::-webkit-details-marker]:hidden  lg:relative">
                <summary className="group flex items-center justify-between rounded-lg px-4 py-2  text-primary-300 ">
                  <div className="flex items-center gap-2 lg:gap-x-2">
                    <span className="font-medium"> Filtrar </span>
                  </div>
                </summary>

                <ul>
                  <li className="lg:flex lg:items-center">
                    <details className=" group/categories [&_summary::-webkit-details-marker]:hidden lg:relative">
                      <summary className="group/categories flex items-center justify-between rounded-lg px-4 py-2 text-primary-300 ">
                        <div className="flex items-center gap-2 lg:gap-x-2">
                          <span className="font-medium"> Categoria </span>
                        </div>

                        <span
                          className={`shrink-0 transition duration-300 group-open/categories:-rotate-180  `}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <ul className="mt-2 space-y-1 bg-secondary-300 lg:mt-3 lg:w-52 lg:px-3 lg:py-4 lg:absolute lg:bg-neutral-100">
                        <label htmlFor="remera">
                          <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
                            <input
                              type="radio"
                              id="remera"
                              name="category"
                              value="remera"
                              className="mx-3"
                              onChange={handleChangeCategory}
                            />
                            Remera
                          </li>
                        </label>

                        <label htmlFor="camperas">
                          <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
                            <input
                              type="radio"
                              id="camperas"
                              name="category"
                              value="campera"
                              className="mx-3"
                              onChange={handleChangeCategory}
                            />
                            Camperas
                          </li>
                        </label>

                        <label htmlFor="jeans">
                          <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
                            <input
                              type="radio"
                              id="jeans"
                              name="category"
                              value="jeans"
                              className="mx-3"
                              onChange={handleChangeCategory}
                            />
                            Jeans
                          </li>
                        </label>

                        <label htmlFor="pantalones">
                          <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
                            <input
                              type="radio"
                              id="pantalones"
                              name="category"
                              value="pantalones"
                              className="mx-3"
                              onChange={handleChangeCategory}
                            />
                            Pantalones
                          </li>
                        </label>

                        <label htmlFor="conjuntos">
                          <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
                            <input
                              type="radio"
                              id="conjuntos"
                              name="category"
                              value="conjuntos"
                              className="mx-3"
                              onChange={handleChangeCategory}
                            />
                            Conjuntos
                          </li>
                        </label>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </article>

        <article className="flex flex-wrap justify-center my-14 md:w-3/4">
          <div className="w-[250px] h-[400px] relative m-1.5 md:h-[341px] md:w-[260px] rounded-tr-[20px] rounded-bl-[20px] border-[0.5px] border-[#515151] overflow-hidden">
            <div className="h-24 flex flex-col justify-between absolute top-2 right-0">
              <div className="w-10 h-10 grid place-content-center rounded-full bg-white bg-opacity-50">
                <button className="text-2xl ">
                  <BsHeart />
                </button>
              </div>
              <div className="w-10 h-10 grid place-content-center rounded-full bg-white bg-opacity-50">
                <button className="text-2xl ">
                  <BsCart3 />
                </button>
              </div>
            </div>
            <div>
              <img src={blusa} alt="" />
            </div>

            <h3 className="text-lg pl-3 leading-7 font-nunito  md:text-[16px] md:text-left md:pl-3">
              blusa
            </h3>
            <div className="w-11/12 m-auto flex items-baseline justify-between  ">
              <h3 className="font-bold leading-7 font-nunito text-center md:text-[16px] md:text-left md:pl-3 md:inline">
                <span>$</span> <span>12.500</span>
              </h3>
              <div className="md:inline-block md:ml-32">
                <img
                  src={img}
                  alt="gama colores"
                  className="ml-auto mt-3 md:w-full"
                />
              </div>
            </div>
          </div>
          {/*<Card img={example1} name="Blusa Algodon" price="10100" />
          <Card img={example2} name="Jeans elastizados" price="18500" />
          <Card img={example3} name="Suéter lanilla" price="8500" />
          <Card img={example4} name="Vestidos de fibrana" price="18100" />
          <Card img={example5} name="Remeras estampadas" price="12200" />*/}
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Store;
