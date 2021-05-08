import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const HttpService = () => {
  const baseURL = process.env.BASE_URL;

  const getInstance = () => {
    const config: AxiosRequestConfig = {
      baseURL: "http://localhost:8080/api/v1/",
      timeout: 30000,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "auth-token": "",
      },
    };

    const connection = axios.create(config);

    return connection;
  };

  const instance = getInstance();

  const get = (url: string, params?: any): Promise<AxiosResponse<any>> => {
    return instance.get(url, { params });
  };

  const put = (url: string, data?: any): Promise<AxiosResponse<any>> => {
    return instance.put(url, data);
  };

  const post = (url: string, data: any): Promise<AxiosResponse<any>> => {
    return instance.post(url, data);
  };

  const remove = (url: string): Promise<AxiosResponse<any>> => {
    return instance.delete(url);
  };

  return { get, put, post, remove };
};
