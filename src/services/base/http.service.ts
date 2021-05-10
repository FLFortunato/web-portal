import axios from "axios";

export const HttpService = () => {
  axios.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("@token");
      config.headers.Authorization = `Bearer ${token}`;
      // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
      config.baseURL = "http://localhost:8080/api/v1/";

      return config;
    },
    (error) => {
      return console.log(error);
    }
  );

  axios.interceptors.response.use(
    (e) => {
      return e;
    },
    async (error) => {
      const oldToken = await localStorage.getItem("@token");

      if (error.response.data.statusCode === 401) {
        const newToken = await axios.put(
          "http://localhost:8080/api/v1/token/refresh",
          { oldToken }
        );

        localStorage.setItem("@token", newToken.data.access_token);
        return axios.request(error.config);
      }
    }
  );

  return {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    remove: axios.delete,
  };
};
