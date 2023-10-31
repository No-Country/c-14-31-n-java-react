import { IoCaretDownOutline } from "react-icons/io5";
import { IoCaretUpOutline } from "react-icons/io5";
import { useState } from "react";

const Accordion = (props) => {
  const [arrow, setArrow] = useState(true);
  const [color, setColor] = useState("border-neutral-500");

  function showFAQ() {
    setColor((color === "border-neutral-500" ? "border-primary-700" : "border-neutral-500"));
  }

  return (
    <details className={`my-1 border-y-2 hover:shadow-md  p-2 w-11/12 md:w-9/12 max-w-[900px] m-auto text-xs sm:text-base 2xl:text-lg select-none ${color}`}>
      <summary className="p-1 list-none flex justify-between items-center cursor-pointer" onClick={() => {setArrow(!arrow); showFAQ();}}>
        <h2 className="text-primary-700 font-bold">{props.title}</h2>
        <p className="text-primary-700 px-2">{arrow ? <IoCaretDownOutline /> : <IoCaretUpOutline />}</p>
      </summary>
      <p className="p-1 px-3 border-t-2 border-neutral-300">{props.description}</p>
    </details>
  )
}

export { Accordion }