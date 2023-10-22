import axios from "axios";

const baseUrl = "localhost:8080/api.mare.com/";

export async function newUser(user) {
  try {
    const response = await axios.post(`${baseUrl}/usuarios/registro`, user);
    return response;
  } catch (error) {
    console.log(error);
  }
}
