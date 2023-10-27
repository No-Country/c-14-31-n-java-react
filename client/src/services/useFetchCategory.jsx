import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCategory = (idCategory) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategory = async () => {
      const url = `http://localhost:8080/${
        idCategory ? `products/category/${idCategory}` : ""
      }`;

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
  }, [idCategory]);

  return { loading, dataProducts };
};

export default useFetchCategory;
