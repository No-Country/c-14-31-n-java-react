import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ infoModal, closeModal }) => {
  const { name, color, waist, stock, description, price, image } = infoModal;
  const handleCloseModal = (e) => {
    e.stopPropagation();
  };
  return (
    <section
      className="w-full m-h-screen font-nunito bg-white bg-opacity-40 backdrop-filter backdrop-blur-sm  absolute top-0 bottom-0 left-0 flex flex-col justify-evenly items-center z-50"
      onClick={closeModal}>
      <article
        className="w-11/12 flex flex-col bg-white md:w-11/12 md:h-[60%] lg:w-[40.625rem]  lg:h-[43.75rem]"
        onClick={handleCloseModal}>
        <div className="w-full py-3 flex flex-col items-center relative md:w-4/5 md:m-auto ">
          <button
            className="w-14 h-14 absolute -top-16 -right-5 text-4xl self-end p-3 m-3 rounded-full"
            onClick={closeModal}>
            <AiOutlineCloseCircle />
          </button>
          <p className="w-full h-9 text-xl  text-white font-bold grid place-content-center  bg-primary-700">
            {name}
          </p>

          <div className="h-24 flex flex-col justify-between absolute top-14 right-0"></div>
          <div className="w-60 h-64 mt-2 ">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>

          <div className=" w-full my-2">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-primary-700  text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-extrabold text-white">
                    Color
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-extrabold text-white">
                    Talla
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-extrabold text-white">
                    En stock
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-extrabold text-white">
                    Precio
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-center bg-neutral-400">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-bold text-primary-700">
                    {color}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-bold text-primary-700">
                    {waist}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-bold text-primary-700">
                    {stock}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-bold text-primary-700">
                    ${price}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full h-40 bg-neutral-400">
            <h4 className="text-primary-700 font-semibold">Descripción</h4>
            <p className=" font-bold text-primary-700">{description}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Modal;
