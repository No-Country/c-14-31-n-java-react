import axios from "axios";
import { useEffect, useState } from "react";

const useOrderPrice = (price) => {
  const [orderPrice, setOrderPrice] = useState("");
  const baseUrl = "http://localhost:8080/precio";

  useEffect(() => {
    async function getOrderPrice() {
      try {
        const response = await axios.get(`${baseUrl}/${price}`);

        if (!response) return;

        setOrderPrice(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getOrderPrice();
  }, [price]);

  return { orderPrice };
};

export default useOrderPrice;
