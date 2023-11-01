import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCategory = (idCategory, searchNameProduct) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://mare-production.up.railway.app/";

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        let url = BASE_URL;

        if (idCategory && idCategory !== "all") {
          url += `products/category/${idCategory}`;
        } else if (searchNameProduct) {
          url += `products/filter/${searchNameProduct}`;
        }

        const response = await axios.get(url);
        setDataProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [idCategory, searchNameProduct]);
  return { loading, dataProducts };
};

export default useFetchCategory;
