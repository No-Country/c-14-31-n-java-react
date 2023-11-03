import Header from "../../components/header/Header";
import HomeBody from "../../components/home/Home";
import { Footer } from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="max-w-screen-2xl min-h-screen m-auto flex flex-col">
      <div>
        <Header />
      </div>
      <div>
        <HomeBody />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
