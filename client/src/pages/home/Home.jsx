import Header from "../../components/header/Header";
import HomeBody from "../../components/home/Home";
import { Footer } from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Header />
      <HomeBody />
      <Footer />
    </div>
  );
};

export default Home;
