import img from "../../assets/img/gamaColoresExample.png"



const Card = (props) => {
    return (
        <div className="w-[150px] h-[241px] m-1.5 md:h-[341px] md:w-[260px] rounded-tr-[20px] rounded-bl-[20px] border-[0.5px] border-[#515151] overflow-hidden">
            <div>
                <img src={props.img} alt={props.name} />
            </div>
            <h3 className="text-xs leading-7 font-nunito text-center md:text-[16px] md:text-left md:pl-3">{props.name}</h3>
            <h3 className="text-xs leading-7 font-nunito text-center md:text-[16px] md:text-left md:pl-3 md:inline">{props.price}</h3>
            <div className="mx-auto md:inline-block md:ml-32">
                <img src={img} alt="gama colores" className="ml-auto mt-3 md:w-full"/>
            </div>
        </div>
    )
}

export default Card