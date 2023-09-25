import Cookies from "js-cookie";
import api from "../..";
import { ENDPOINT } from "../..";

const loginAdmin = async (form) => {
  try {
    const response = await api.post(`${ENDPOINT.AUTH}/login`, form);
    console.log("form >> ",form)
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  Cookies.remove("token");
};

export { loginAdmin , logout};
