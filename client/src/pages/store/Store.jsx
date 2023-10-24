import { useState } from "react";
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import Card from "../../components/card/Card";

import example1 from "../../assets/img/ExampleCard1.png";
import example2 from "../../assets/img/ExampleCard2.png";
import example3 from "../../assets/img/ExampleCard3.png";
import example4 from "../../assets/img/ExampleCard4.png";
import example5 from "../../assets/img/ExampleCard5.png";

import useFetchAllCategories from "../../services/useFetchAllCategories";

const Store = () => {
  const [category, setCategory] = useState("");

  //const { allCategories } = useFetchAllCategories();

  //if (!allCategories) return;
  //console.log(allCategories);

  const handleChangeCategory = (e) => {
    const categoryOption = e.target.value;
    setCategory(categoryOption);
  };

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
                      <summary className="group/categories flex items-center justify-between rounded-lg px-4 py-2  text-primary-300 ">
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
          <Card img={example1} name="Blusa Algodon" price="10100" />
          <Card img={example2} name="Jeans elastizados" price="18500" />
          <Card img={example3} name="Suéter lanilla" price="8500" />
          <Card img={example4} name="Vestidos de fibrana" price="18100" />
          <Card img={example5} name="Remeras estampadas" price="12200" />
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Store;