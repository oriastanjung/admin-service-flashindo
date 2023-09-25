import axios from "axios";
import Cookies from "js-cookie";

export const ENDPOINT = {
  USERS: "/users",
  AUTH: "/users/admin/auth",
  TASKS: "/tasks",
  CATEGORIES: "/categories",
  TRANSACTIONS : "/transactions"
};


const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
};

const headersMultipart = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
};



const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BACKEND_URL}`, // http://localhost:1337
  headers,
});

const apiMultiPart = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BACKEND_URL}`, // http://localhost:1337
  headersMultipart,
});

// Set the AUTH token for any request
api.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// Set the AUTH token for any request
apiMultiPart.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export {
  apiMultiPart
}
export default api;
