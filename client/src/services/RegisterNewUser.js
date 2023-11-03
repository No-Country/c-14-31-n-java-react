import axios from "axios";

const baseUrl =
  "https://mare-production.up.railway.app/api.mare.com/user/register";

export async function newUser(user) {
  try {
    const response = await axios.post(baseUrl, user);
    return response;
  } catch (error) {
    return error.response;
  }
}
