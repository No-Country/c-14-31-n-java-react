import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCategory = (idCategory, price) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [url, setUrl] = useState(second);

  useEffect(() => {
    const getCategory = async () => {
      let url = "";

      if (idCategory) {
        url = `http://localhost:8080/${
          idCategory === "all" ? "" : `products/category/${idCategory}`
        }`;
      }

      if (price) {
        url = `http://localhost:8080/precio/${price}`;
      }

      try {
        const response = await axios.get(`${url}`);
        setLoading(true);

        if (!response) return;

        setDataProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCategory();
  }, [idCategory, price]);

  return { loading, dataProducts };
};

export default useFetchCategory;
