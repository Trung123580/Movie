import axios from 'axios';

const BASE_API = process.env.MOVIE_BASE_API;
export const getSlides = async (page: number = 1) => {
  try {
    const response = await axios.get(`${BASE_API}${process.env.MOVIE_MENU_API}/phim-moi-cap-nhat?page=${page}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('data not found!');
    }
  } catch (error) {
    return [];
  }
};

export const getNewMovie = async () => {
  try {
    const response = await axios.get(`${BASE_API}/v1/api${process.env.MOVIE_MENU_API}/phim-le?page=1&limit=1`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Data not found!');
    }
  } catch (error) {
    return [];
  }
};
