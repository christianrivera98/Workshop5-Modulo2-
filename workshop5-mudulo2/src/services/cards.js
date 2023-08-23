import { cardsAxios } from "./data";

export const GetCards = async () => {
  try {
    const { data } = await cardsAxios.get("/");
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCard = async (id) => {
  try {
    const { data } = await cardsAxios.get(`/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
