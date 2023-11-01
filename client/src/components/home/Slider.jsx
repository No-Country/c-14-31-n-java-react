import { useState, useEffect } from "react";
import img1 from "../../assets/img/carousel.png";
import img2 from "../../assets/img/carouselImg1.png";
import img3 from "../../assets/img/carouselImg2.png";
import img4 from "../../assets/img/carouselImg3.png";
import img5 from "../../assets/img/carouselImg4.png";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [images, isHovered]);

  return (
    <div className="w-full relative">
      <div
        className="relative w-full lg:h-24 max-w-2xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <button
          onClick={prevSlide}
          className="w-10 h-10 grid place-content-center text-white rounded-full px-4 py-2 absolute left-2 bg-primary-700 z-20 md:-top-3 md:-left-4 lg:-left-32 lg:top-5 lg:w-12 lg:h-12 hover:text-primary-700 transition-colors duration-300 ease-in-out ">
          <LiaAngleLeftSolid className="w-10 h-10  rounded-full hover:bg-white" />
        </button>
        {images.map((slide, index) => (
          <div
            key={index}
            className={`absolute -top-28 left-0 w-full lg:w-[900px] lg:-left-28 h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
            <img
              src={slide.imageUrl}
              alt={slide.caption}
              className="w-full h-60 lg:h-80 object-cover"
            />
          </div>
        ))}
        <button
          onClick={nextSlide}
          className="w-10 h-10 grid place-content-center text-white rounded-full px-4 py-2 absolute top-0 right-2 bg-primary-700 z-20 md:-top-3 md:-right-4 lg:-right-32 lg:top-5 lg:w-12 lg:h-12 hover:text-primary-700 transition-colors duration-300 ease-in-out">
          <LiaAngleRightSolid className="w-10 h-10 rounded-full hover:bg-white" />
        </button>
      </div>
      <div className="flex justify-center mt-4"></div>

      {/*<div
        id="default-carousel"
        className="relative w-full"
        data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={img1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={img2}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={img3}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={img4}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={img5}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"></button>
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>*/}
    </div>
  );
};

export default Slider;
