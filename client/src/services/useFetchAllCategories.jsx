import { useEffect, useState } from "react";
import axios from "axios";

const useFetchAllCategories = () => {
  const [allCategories, setAllCategories] = useState();
  const baseUrl = "http://localhost:8080/";
  //const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    async function getAllCategories() {
      try {
        const response = await axios.get(`${baseUrl}`);

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