import { useState } from "react";
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

import useFetchAllCategories from "../../services/useFetchAllCategories";
import CardStore from "./CardStore";
import useFetchCategory from "../../services/useFetchCategory";
//import useOrderPrice from "../../services/useOrderPrice";

const Store = () => {
  const initialToggle = {
    categories: false,
    category: false,
    price: false,
  };
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("");
  const [toggleCategories, setToggleCategories] = useState(initialToggle);

  const { allCategories } = useFetchAllCategories();
  //const { orderPrice } = useOrderPrice(price);

  const { loading, dataProducts } = useFetchCategory(category, price);

  const handleChangeCategory = (e) => {
    const categoryOption = e.target.value;
    setCategory(categoryOption);
  };

  const handleChangePrice = (e) => {
    const optionPrice = e.target.value;
    setPrice(optionPrice);
  };

  const handleToggleFilter = (filter) => {
    console.log(filter);
    setToggleCategories({
      ...toggleCategories,
      [filter]: !toggleCategories[filter],
    });
  };

  return (
    <main className="max-w-screen-2xl  bg-red-100  m-auto">
      <Header />
      <section className="">
        <article className="w-full font-nunito">
          <div className="">
            <div className="h-36">
              <h4 className="text-center my-2">Busqueda por nombre</h4>
              <form className="w-full h-28 flex flex-col items-center justify-around bg-slate-600">
                <label htmlFor="">
                  <input type="text" className="w-52 h-9 rounded-md" />
                </label>
                <button
                  className="w-40 h-10 rounded-md bg-primary-700 text-white hover:bg-white hover:border border-primary-700 hover:text-primary-700 hover:font-bold transition ease-in-out duration-500
                  ">
                  Buscar
                </button>
              </form>
            </div>
            <h4
              className="flex  bg-neutral-300 text-xl p-3 transition duration-300 ease-in"
              onClick={() => handleToggleFilter("categories")}>
              Filtros
            </h4>
            {/*<div className="w-full h-[530px] md:h-[830px] grid place-content-center bg-primary-100">
              <span className="loader "></span>
            </div>*/}

            <div
              className={`${
                !toggleCategories.categories ? "hidden" : "block"
              }`}>
              <div>
                <h4
                  className="font-semibold p-2"
                  onClick={() => handleToggleFilter("category")}>
                  Categorias
                </h4>
                <ul
                  className={`${
                    !toggleCategories.category ? "hidden" : "block"
                  }`}>
                  <li>
                    <label htmlFor="all">
                      <input
                        id="all"
                        type="radio"
                        name="category"
                        value="all"
                        className="mx-2"
                        onChange={handleChangeCategory}
                      />
                      Todos los productos
                    </label>
                  </li>
                  {allCategories?.map((category) => (
                    <li key={category.id}>
                      <label htmlFor={category.name}>
                        <input
                          type="radio"
                          name="category"
                          id={category.name}
                          value={category.id}
                          className="mx-2"
                          onChange={handleChangeCategory}
                        />
                        {category.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  className="font-semibold p-2"
                  onClick={() => handleToggleFilter("price")}>
                  Precios
                </h4>
                <ul
                  className={`${!toggleCategories.price ? "hidden" : "block"}`}>
                  <li>
                    <label htmlFor="mayor">
                      <input
                        id="mayor"
                        type="radio"
                        name="price"
                        className="mx-2"
                        value="mayor_a_menor"
                        onChange={handleChangePrice}
                      />
                      Orden de mayor a menor
                    </label>
                  </li>
                  <li>
                    <label htmlFor="menor">
                      <input
                        id="menor"
                        type="radio"
                        name="price"
                        className="mx-2"
                        value="menor_a_mayor"
                        onChange={handleChangePrice}
                      />
                      Orden de menor a mayor
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        {loading ? (
          <div className="w-full h-[530px] md:h-[830px] grid place-content-center  bg-primary-100">
            <span className="loader "></span>
          </div>
        ) : (
          <article className="w-11/12 h-[600px] m-auto my-4  overflow-hidden overflow-y-auto flex flex-wrap justify-center  md:w-3/4 lg:h-[750px] bg-red-500">
            {dataProducts?.map((product) => (
              <CardStore key={product.id} product={product} />
            ))}
          </article>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Store;

// <article className="w-full absolute z-40  md:w-1/4 md:sticky md:top-0 md:bg-secondary-200">
//   <ul>
//     <li className="lg:flex lg:items-center  bg-secondary-200">
//       <details className="group [&_summary::-webkit-details-marker]:hidden  lg:relative">
//         <summary className="group flex items-center justify-between rounded-lg px-4 py-2  text-primary-300 ">
//           <div className="flex items-center gap-2 lg:gap-x-2">
//             <span className="font-medium"> Filtrar </span>
//           </div>
//         </summary>

//         <ul>
//           <li className="lg:flex lg:items-center">
//             <details className=" group/categories [&_summary::-webkit-details-marker]:hidden lg:relative">
//               <summary className="group/categories flex items-center justify-between rounded-lg px-4 py-2 text-primary-300 ">
//                 <div className="flex items-center gap-2 lg:gap-x-2">
//                   <span className="font-medium"> Categoria </span>
//                 </div>

//                 <span
//                   className={`shrink-0 transition duration-300 group-open/categories:-rotate-180  `}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor">
//                     <path
//                       fillRule="evenodd"
//                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </span>
//               </summary>

//               <ul className="mt-2 space-y-1 bg-secondary-300 lg:mt-3 lg:w-52 lg:px-3 lg:py-4 lg:absolute lg:bg-neutral-100">
//                 {allCategories?.map((category) => (
//                   <label htmlFor={category.name} key={category.id}>
//                     <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
//                       <input
//                         type="radio"
//                         id={category.name}
//                         name="category"
//                         value={category.id}
//                         className="mx-3"
//                         onChange={handleChangeCategory}
//                       />
//                       {category.name}
//                     </li>
//                   </label>
//                 ))}
//                 <label htmlFor="remera">
//                        <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
//                          <input
//                            type="radio"
//                            id="remera"
//                            name="category"
//                            value="remera"
//                            className="mx-3"
//                            onChange={handleChangeCategory}
//                          />
//                          Remera
//                        </li>
//                      </label>

//                      <label htmlFor="camperas">
//                        <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
//                          <input
//                            type="radio"
//                            id="camperas"
//                            name="category"
//                            value="campera"
//                            className="mx-3"
//                            onChange={handleChangeCategory}
//                          />
//                          Camperas
//                        </li>
//                      </label>

//                      <label htmlFor="jeans">
//                        <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
//                          <input
//                            type="radio"
//                            id="jeans"
//                            name="category"
//                            value="jeans"
//                            className="mx-3"
//                            onChange={handleChangeCategory}
//                          />
//                          Jeans
//                        </li>
//                      </label>

//                      <label htmlFor="pantalones">
//                        <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
//                          <input
//                            type="radio"
//                            id="pantalones"
//                            name="category"
//                            value="pantalones"
//                            className="mx-3"
//                            onChange={handleChangeCategory}
//                          />
//                          Pantalones
//                        </li>
//                      </label>

//                      <label htmlFor="conjuntos">
//                        <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
//                          <input
//                            type="radio"
//                            id="conjuntos"
//                            name="category"
//                            value="conjuntos"
//                            className="mx-3"
//                            onChange={handleChangeCategory}
//                          />
//                          Conjuntos
//                        </li>
//                      </label>
//               </ul>
//             </details>
//           </li>
//         </ul>

//         <ul>
//           <li className="lg:flex lg:items-center">
//             <details className=" group/price [&_summary::-webkit-details-marker]:hidden lg:relative">
//               <summary className="group/price flex items-center justify-between rounded-lg px-4 py-2 text-primary-300 ">
//                 <div className="flex items-center gap-2 lg:gap-x-2">
//                   <span className="font-medium"> Precios </span>
//                 </div>

//                 <span
//                   className={`shrink-0 transition duration-300 group-open/price:-rotate-180  `}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor">
//                     <path
//                       fillRule="evenodd"
//                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </span>
//               </summary>

//               <ul className="mt-2 space-y-1 bg-secondary-300 lg:mt-3 lg:w-52 lg:px-3 lg:py-4 lg:absolute lg:bg-neutral-100">
//                 <label htmlFor="mayor">
//                   <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
//                     <input
//                       type="radio"
//                       id="mayor"
//                       name="price"
//                       value="mayor_a_menor"
//                       className="mx-3"
//                       onChange={handleChangePrice}
//                     />
//                     Mayor a menor
//                   </li>
//                 </label>

//                 <label htmlFor="menor">
//                   <li className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-neutral-200 hover:text-gray-700">
//                     <input
//                       type="radio"
//                       id="menor"
//                       name="price"
//                       value="menor_a_mayor"
//                       className="mx-3"
//                       onChange={handleChangePrice}
//                     />
//                     Menor a mayor
//                   </li>
//                 </label>
//               </ul>
//             </details>
//           </li>
//         </ul>
//       </details>
//     </li>
//   </ul>
// </article>;
