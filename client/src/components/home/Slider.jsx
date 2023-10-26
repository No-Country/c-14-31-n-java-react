import { useState, useEffect } from "react";

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 6000); // Cambia de slide cada 3 segundos

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full lg:h-24  max-w-2xl mx-auto">
      {images.map((slide, index) => (
        <div
          key={index}
          className={`absolute -top-28 left-0 w-full lg:w-[900px]  lg:-left-28 h-full  transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}>
          <img
            src={slide.imageUrl}
            alt={slide.caption}
            className="w-full h-60 lg:h-80 object-cover"
          />
          {/*<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 lg:bottom-14">
            {slide.caption}
          </div>*/}
        </div>
      ))}
    </div>
  );
};

export default Slider;
