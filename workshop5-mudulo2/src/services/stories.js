import { storiesAxios } from "./data";

export const GetStories = async () => {
  try {
    const { data } = await storiesAxios.get("/");
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getStory = async (id) => {
  try {
    const { data } = await storiesAxios.get(`/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
