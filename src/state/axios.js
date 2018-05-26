import axios from "axios";
import { push } from "react-router-redux";

import store from "./store";

const API_URL = process.env.REACT_APP_API_URL;

let instance = axios.create({
  baseURL: API_URL
});

instance.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem("token");
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    console.log(error);
    localStorage.removeItem("token");
    store.dispatch(push("/login"));
    return Promise.reject(error);
  }
);

export default instance;
