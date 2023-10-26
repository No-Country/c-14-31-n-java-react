import axios from "axios";

const baseUrl = "http://localhost:8080/api.mare.com/user/register";

export async function newUser(user) {
  try {
    const response = await axios.post(baseUrl, user);
    return response;
  } catch (error) {
    return error.response;
  }
}
