import { BsCart3, BsHeart } from "react-icons/bs";

const Modal = ({ infoModal, closeModal }) => {
  const { name, color, waist, stock, description, price, image } = infoModal;
  return (
    <section className="w-full m-h-screen font-nunito bg-black bg-opacity-80 absolute top-0 bottom-0 left-0 flex flex-col justify-evenly items-center z-50">
      <article className="w-11/12 flex flex-col bg-neutral-600 md:w-11/12 md:h-[60%] lg:w-[40.625rem]  lg:h-[43.75rem]">
        <div className="w-full py-3 flex flex-col items-center relative md:w-4/5 md:m-auto ">
          <button
            className="w-14 h-14 absolute -top-10 -right-5 text-2xl bg-black bg-opacity-80 self-end p-3 m-3 rounded-full"
            onClick={() => closeModal()}>
            ❌
          </button>
          <p className="w-full h-9 text-xl  text-white font-bold grid place-content-center  bg-primary-700">
            {name}
          </p>

          <div className="h-24 flex flex-col justify-between absolute top-14 right-0">
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
          <div className="w-60 h-64  ">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>

          <div className=" w-full my-2">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-primary-400 text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-extrabold text-primary-900">
                    Color
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-extrabold text-primary-900">
                    Talla
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-extrabold text-primary-900">
                    En stock
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-extrabold text-primary-900">
                    Precio
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-center">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-white">
                    {color}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-white">
                    {waist}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-white">
                    {stock}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-white">
                    ${price}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full h-40 bg-primary-400">
            <h4 className="text-primary-900 font-semibold">Descripción</h4>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Modal;
