import PropTypes from 'prop-types';

const baseURL = 'https://pixabay.com/api/';
const KEY = '36461904-24d1ae2c3c82374d87f1f6715';


export const fetchImages = (query, page) => {
  return fetch(
    `${baseURL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  ).then(response => response.json());
};

fetchImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

