import axios from "axios";
import { useEffect, useState } from "react";

const useFetchFeatured = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://mare-production.up.railway.app/featured";

  useEffect(() => {
    async function getFeatured() {
      setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}`);

        if (!response) return;

        setFeatured(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getFeatured();
  }, []);

  return { loading, featured };
};

export default useFetchFeatured;
