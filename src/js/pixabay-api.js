import { handleError } from './handle-error.js';
import axios from 'axios';

const API_KEY = '49367639-b33ebacd3c1171708280ede99';
const BASE_URL = 'https://pixabay.com/api/';

const PARAMS = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 15,
};

async function fetchImages(query, page = 1) {
  const loader = document.getElementById('loader');
  loader.style.display = 'flex';

  try {
    const response = await axios.get(BASE_URL, {
      params: { ...PARAMS, q: query, page },
    });
    return response.data;
  } catch (error) {
    handleError('Failed to fetch images');
    throw error;
  } finally {
    loader.style.display = 'none';
  }
}

export { fetchImages };
