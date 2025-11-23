import axios from "axios";

const $host = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const $authHost = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

$authHost.interceptors.request.use((config) => {
  //Брал код из предыдущего своего проекта. Там есть проверка,
  //что если токен передан, то возвращаем config,
  //а если нет, то берем token из Cookie
  //пока оставил без проверки
  const requestToken = config.headers?.usertoken;
  return config;
});

export { $host, $authHost };
