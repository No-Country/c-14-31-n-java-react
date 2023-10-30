import { BsCart3, BsHeart } from "react-icons/bs";
import colors from "../../assets/img/gamaColoresExample.png";

const CardStore = ({ product, handleInfoModal }) => {
  const { name, price, image } = product;
  return (
    <div className="w-[250px] h-[380px] bg-white relative m-1.5 md:h-[341px] md:w-[260px] rounded-tr-[20px] rounded-bl-[20px] border-[0.5px] border-neutral-500 overflow-hidden">
      {/*{comment && (
        <div className="w-2/5 absolute top-0 bg-black bg-opacity-50 ">
          <p className="text-white text-center text-lg  font-semibold tracking-widest font-cormorant">
            {comment}
          </p>
        </div>
      )}*/}
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
      <div className="h-4/5 border-b-[.5px]  border-neutral-500">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>

      <h3 className="text-lg pl-3 leading-7 font-nunito  md:text-[16px] md:text-left md:pl-3">
        {name}
      </h3>
      <div className="w-11/12 m-auto flex items-baseline justify-between">
        <p className="w-24 font-bold leading-7 font-nunito text-left">
          <span>$</span> <span>{price}</span>
        </p>
        {/*<div>
          <img
            src={colors}
            alt="gama colores"
            className="ml-auto mt-3 md:w-full"
          />
        </div>*/}
        <button
          className="w-24 h-9 rounded-md text-white font-nunito bg-primary-400"
          onClick={() => handleInfoModal(product)}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default CardStore;
