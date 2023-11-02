import { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { RiArrowRightSLine, RiFilter2Fill } from "react-icons/ri";

import useFetchAllCategories from "../../services/useFetchAllCategories";
import CardStore from "./CardStore";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";
import useFetchCategory from "../../services/useFetchFilterCategories";

const Store = () => {
  const initialToggle = {
    categories: true,
    category: false,
    price: false,
  };
  const initialSearchProduct = { product: "" };
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("");
  const [toggleCategories, setToggleCategories] = useState(initialToggle);
  const [filterPrice, setFilterPrice] = useState([]);
  const [inputSearch, setInputSearch] = useState(initialSearchProduct);
  const [searchProduct, setSearchProduct] = useState("");
  const [infoModal, setInfoModal] = useState([]);
  const [errorInput, setErrorInput] = useState(false);
  const [notFoundProduct, setNotFoundProduct] = useState(false);
  const { allCategories } = useFetchAllCategories();
  const { loading, dataProducts } = useFetchCategory(category, searchProduct);

  const [isOpen, openModal, closeModal] = useModal();

  const inputRef = useRef();

  const handleChangeCategory = (e) => {
    const categoryOption = e.target.value;
    setCategory(categoryOption);
  };

  const handleChangePrice = (e) => {
    const optionPrice = e.target.value;
    setPrice(optionPrice);
  };

  useEffect(() => {
    setFilterPrice(dataProducts);

    const getFilterPrice = () => {
      let newFilter = [];
      if (price === "mayor_a_menor") {
        newFilter = dataProducts.toSorted((a, b) => b.price - a.price);
        setFilterPrice(newFilter);
      }

      if (price === "menor_a_mayor") {
        newFilter = dataProducts.toSorted((a, b) => a.price - b.price);
        setFilterPrice(newFilter);
      }

      if (price === "reset") {
        setToggleCategories({
          ...toggleCategories,
          price: false,
        });
      }
    };

    getFilterPrice();
  }, [dataProducts, price]);

  useEffect(() => {
    let timer;

    if (searchProduct.length > 0 && dataProducts.length < 1) {
      console.log("No hay productos");
      setNotFoundProduct(true);

      timer = setTimeout(() => {
        setNotFoundProduct(false);
        setSearchProduct("");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [searchProduct, dataProducts]);

  const handleToggleFilter = (filter) => {
    setToggleCategories({
      ...toggleCategories,
      [filter]: !toggleCategories[filter],
    });
  };

  const handleInputSearch = (e) => {
    const { name, value } = e.target;
    setErrorInput(false);

    setInputSearch({
      ...inputSearch,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputSearch.product) {
      return setErrorInput(true);
    }

    setSearchProduct(inputSearch.product);
    setCategory("all");
    setInputSearch(initialSearchProduct);
    inputRef.current.focus();
    setToggleCategories({
      ...toggleCategories,
      categories: false,
    });
  };

  const handleInfoModal = (infoProduct) => {
    openModal();
    setInfoModal(infoProduct);
  };

  let textFilter = toggleCategories.categories
    ? "Ocultar Filtro"
    : "Mostrar Filtro";

  return (
    <main className="max-w-screen-2xl m-auto relative">
      <Header />
      <section className="lg:flex">
        <article className="w-full font-nunito lg:w-1/3 lg:flex lg:justify-center  bg-neutral-200 ">
          <div className="lg:w-full bg-neutral-50 ">
            <div className="h-52 my-5 lg:w-full">
              <h4 className="text-center my-1 text-lg font-semibold">
                Busca tu producto.
              </h4>
              <form
                className="h-48 flex flex-col items-center justify-evenly "
                onSubmit={handleSubmit}>
                <label
                  htmlFor="Username"
                  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  <input
                    type="text"
                    id="Username"
                    name="product"
                    className="w-52 h-9 px-2 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="Username"
                    ref={inputRef}
                    value={inputSearch.product}
                    autoComplete="off"
                    onChange={handleInputSearch}
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-neutral-50 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Nombre del producto
                  </span>

                  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <span className="sr-only">Search</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 hover:text-primary-700">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </span>
                </label>
                {errorInput && (
                  <p className="w-11/12 text-center text-sm font-semibold rounded-lg p-2 m-1 text-white bg-red-500">
                    Escribe el nombre del producto por favor.
                  </p>
                )}
                <div className="w-96 h-14 flex justify-evenly items-center ">
                  <button
                    type="submit"
                    className="w-40 h-10 rounded-md bg-primary-700 text-white hover:bg-white hover:border border-primary-700 hover:text-primary-700 hover:font-bold transition ease-in-out duration-500 lg:w-36 lg:h-12
                  ">
                    Buscar
                  </button>
                  <button
                    type="button"
                    className="w-40 h-10 rounded-md bg-primary-700 text-white hover:bg-white hover:border border-primary-700 hover:text-primary-700 hover:font-bold transition ease-in-out duration-500 lg:w-36 lg:h-12
                  "
                    onClick={() => setSearchProduct("")}>
                    Volver a la tienda
                  </button>
                </div>
                <p className="text-primary-700">Número de Productos</p>
                <p className="text-primary-700 font-semibold text-center">
                  {filterPrice.length}
                </p>
              </form>
            </div>
            <div
              className="flex items-center bg-neutral-200 text-xl p-3 transition duration-300 ease-in cursor-pointer"
              onClick={() => handleToggleFilter("categories")}>
              <h4 className={`pr-3 font-semibold`}>{textFilter}</h4>
              <RiFilter2Fill />
            </div>

            <div
              className={`${
                !toggleCategories.categories ? "hidden" : "block"
              }`}>
              <div>
                <div
                  className="w-full flex items-center"
                  onClick={() => handleToggleFilter("category")}>
                  <h4 className="font-semibold p-2 ">Categorias</h4>
                  <RiArrowRightSLine
                    className={`transition ease-in duration-150 ${
                      toggleCategories.category
                        ? "transform rotate-90"
                        : "transform rotate-0"
                    }`}
                  />
                </div>
                <ul
                  className={`${
                    !toggleCategories.category ? "hidden" : "block "
                  }`}>
                  <li>
                    <label htmlFor="all" className="cursor-pointer">
                      <input
                        id="all"
                        type="radio"
                        name="category"
                        value="all"
                        className="mx-2 cursor-pointer"
                        checked={category === "all" ? true : false}
                        onChange={handleChangeCategory}
                      />
                      Todos las categorias
                    </label>
                  </li>
                  {allCategories?.map((category) => (
                    <li key={category.id}>
                      <label htmlFor={category.name} className="cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          id={category.name}
                          value={category.id}
                          className="mx-2 "
                          onChange={handleChangeCategory}
                        />
                        {category.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div
                  className="w-full flex items-center"
                  onClick={() => handleToggleFilter("price")}>
                  <h4 className="font-semibold p-2">Precios</h4>
                  <RiArrowRightSLine
                    className={`transition ease-in duration-150 ${
                      toggleCategories.price
                        ? "transform rotate-90"
                        : "transform rotate-0"
                    }`}
                  />
                </div>
                <ul
                  className={`${!toggleCategories.price ? "hidden" : "block"}`}>
                  <li>
                    <label htmlFor="high" className="cursor-pointer">
                      <input
                        id="high"
                        type="radio"
                        name="price"
                        className="mx-2"
                        value="mayor_a_menor"
                        checked={price === "mayor_a_menor" ? true : false}
                        onChange={handleChangePrice}
                      />
                      Orden de mayor a menor
                    </label>
                  </li>
                  <li>
                    <label htmlFor="low" className="cursor-pointer">
                      <input
                        id="low"
                        type="radio"
                        name="price"
                        className="mx-2"
                        value="menor_a_mayor"
                        checked={price === "menor_a_mayor" ? true : false}
                        onChange={handleChangePrice}
                      />
                      Orden de menor a mayor
                    </label>
                  </li>
                  <li>
                    <label htmlFor="reset" className="cursor-pointer">
                      <input
                        id="reset"
                        type="radio"
                        name="price"
                        className="mx-2"
                        value="reset"
                        checked={toggleCategories.price ? false : true}
                        onChange={handleChangePrice}
                      />
                      Quitar filtro precio
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {loading ? (
          <div className="w-11/12 h-[530px] m-auto md:h-[830px] grid place-content-center lg:w-3/4  bg-primary-100">
            <span className="loader "></span>
          </div>
        ) : (
          <article className="h-[600px] m-auto my-4 overflow-hidden overflow-y-auto scrollbar flex flex-wrap justify-center lg:w-3/4 lg:h-[760px] lg:my-0 lg:justify-evenly xl:h-[830px] bg-primary-900">
            {notFoundProduct ? (
              <div className="w-full h-96 grid place-content-center">
                <p className="text-3xl text-white font-bold">
                  Producto no encontrado
                </p>
              </div>
            ) : (
              <>
                {filterPrice?.map((product) => (
                  <CardStore
                    key={product.id}
                    product={product}
                    handleInfoModal={handleInfoModal}
                  />
                ))}
              </>
            )}
          </article>
        )}

        {isOpen && <Modal infoModal={infoModal} closeModal={closeModal} />}
      </section>

      <Footer />
    </main>
  );
};

export default Store;
