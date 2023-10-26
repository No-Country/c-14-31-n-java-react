import { useEffect, useState } from "react";
import axios from "axios";

const useFetchAllCategories = () => {
  const [allCategories, setAllCategories] = useState();
  const baseUrl = "http://localhost:8080/categories";

  useEffect(() => {
    async function getAllCategories() {
      try {
        const response = await axios.get(`${baseUrl}`);

        if (!response) return;

        setAllCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getAllCategories();
  }, []);

  return { allCategories };
};

export default useFetchAllCategories;
