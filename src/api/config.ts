import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.interceptors.request.use((request) => {
  return request;
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    {
      const { status } = error?.response || {};
      if (status === 440) {
        window.location.href = "/";
      } else {
        throw error;
      }
    }
  }
);

export default instance;
