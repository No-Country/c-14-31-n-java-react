import carousel from "../../assets/img/mare-indumentaria.jpg";
import carousel1 from "../../assets/img/carouselImg1.png";
import carousel2 from "../../assets/img/carouselImg2.png";
import carousel3 from "../../assets/img/carouselImg3.png";
import carousel4 from "../../assets/img/carouselImg4.png";
import Slider from "./Slider";
import useFetchFeatured from "../../services/useFetchFeatured";
import CardStore from "../../pages/store/CardStore";

const HomeBody = () => {
  const images = [
    {
      imageUrl: carousel,
      caption: "Descripción",
    },
    {
      imageUrl: carousel1,
      caption: "Descripción",
    },
    {
      imageUrl: carousel2,
      caption: "Descripción",
    },
    {
      imageUrl: carousel3,
      caption: "Descripción",
    },
    {
      imageUrl: carousel4,
      caption: "Descripción",
    },
  ];

  const { loading, featured } = useFetchFeatured();

  return (
    <main className="max-w-screen-2xl m-auto">
      <div className="h-80 lg:h-96  bg-red-100 flex items-center justify-center">
        <Slider images={images} />
      </div>

      <article>
        <h2 className="text-center font-bold">Destacados:</h2>
        <div className="flex flex-wrap justify-center items-center">
          {loading && (
            <div className="w-full h-[530px] md:h-[830px] grid place-content-center  bg-primary-100">
              <span className="loader "></span>
            </div>
          )}

          {featured?.map((product) => (
            <CardStore key={product.id} product={product} home={true}/>
          ))}
        </div>
      </article>
    </main>
  );
};

export default HomeBody;
