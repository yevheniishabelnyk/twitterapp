import axios from "axios";

const BASE_URL = "https://api.twitter.com/2";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const token = "twitter_app_token";

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log("all request errors cancelled", error);
    } else {
      return Promise.reject(error);
    }
  },
);

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    console.log("response axios error", error);

    return Promise.reject(error);
  },
);

export default axiosInstance;
