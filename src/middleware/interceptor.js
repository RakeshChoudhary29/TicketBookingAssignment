import axios from "axios";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI,
  // other configurations
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("call the refresh token api here");
      // Handle 401 error, e.g., redirect to login or refresh token
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
