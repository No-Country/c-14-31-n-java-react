import axios from "axios";
import { useEffect, useState } from "react";

const useFetchAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const baseUrl = "http://localhost:8080/";

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await axios.get(`${baseUrl}`);

        setAllProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getAllProducts();
  }, []);

  return { allProducts };
};

export default useFetchAllProducts;
