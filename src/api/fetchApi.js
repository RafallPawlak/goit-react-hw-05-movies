import axios from 'axios';

 export const fetchMovie = async (path, query, page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${path}`, {
    method: 'get',
    params: {
      api_key: 'cfb3f1c097fdc1e68787a815ffed0794',
      q: query,
      page: page,
    },
  });

  return response.data;
};
