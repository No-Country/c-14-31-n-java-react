import Card from "../card/Card";
import example1 from "../../assets/img/ExampleCard1.png";
import example2 from "../../assets/img/ExampleCard2.png";
import example3 from "../../assets/img/ExampleCard3.png";
import example4 from "../../assets/img/ExampleCard4.png";
import example5 from "../../assets/img/ExampleCard5.png";
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
    <main className="max-w-screen-2xl min-h-screen  m-auto">
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
            <CardStore key={product.id} product={product} />
          ))}
          {/*<Card img={example1} name="Blusa Algodon" price="10100" />
          <Card img={example2} name="Jeans elastizados" price="18500" />
          <Card img={example3} name="Suéter lanilla" price="8500" />
          <Card img={example4} name="Vestidos de fibrana" price="18100" />
          <Card img={example5} name="Remeras estampadas" price="12200" />*/}
        </div>
      </article>
    </main>
  );
};

export default HomeBody;
