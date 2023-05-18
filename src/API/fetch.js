// import PropTypes from 'prop-types';

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '36461904-24d1ae2c3c82374d87f1f6715';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits;
};