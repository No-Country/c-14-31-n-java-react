import { useState } from "react";
import img from "../../assets/img/gamaColoresExample.png";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";

const Card = (props) => {
  const [fav, setFav] = useState(false)
  const [car, setCar] = useState(false)
  const handleFav = () => {
    fav===false? setFav(true):
    setFav(false)
  }
  const handleCar = () => {
    car===false? setCar(true):
    setCar(false)
  }


  return (
    <div className="w-[150px] h-[241px] m-1.5 md:h-[341px] md:w-[260px] rounded-tr-[20px] rounded-bl-[20px] border-[0.5px] border-[#515151] overflow-hidden relative">
      <div className="absolute right-2 top-2">
        {fav?<AiFillHeart className="w-5 cursor-pointer" onClick={handleFav}/>:<AiOutlineHeart className="w-5 cursor-pointer" onClick={handleFav}/>}
        {car?<BsFillCartCheckFill className="w-5 cursor-pointer" onClick={handleCar}/>:<BsCart2 className="w-5 cursor-pointer" onClick={handleCar}/>}
      </div>
      <div className="h-3/4 overflow-hidden">
        <img src={props.img} alt={props.name} className="w-full"/>
      </div>
      <h3 className="text-xs leading-7 font-nunito text-center md:text-[16px] md:text-left md:pl-3">
        {props.name}
      </h3>
      <h3 className="text-xs leading-7 font-nunito text-center md:text-[16px] md:text-left md:pl-3 md:inline">
        {props.price}
      </h3>
      <div className="mx-auto md:inline-block md:ml-32">
        <img src={img} alt="gama colores" className="ml-auto mt-3 md:w-full" />
      </div>
    </div>
  );
};

export default Card;
