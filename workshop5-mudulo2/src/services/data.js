import axios from "axios";
const URL_API = "https://api-fandy.onrender.com/";

export const storiesAxios = axios.create({
  baseURL: `${URL_API}stories`,
});

export const cardsAxios = axios.create({
  baseURL: `${URL_API}cards`,
});
