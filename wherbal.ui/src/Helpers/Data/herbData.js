import axios from 'axios';
import { BaseURL } from '../config.json';

const herbUrl = `${BaseURL}/herbs`;

const getAllHerbs = () => new Promise((resolve, reject) => {
  axios.get(herbUrl).then((response) => {
    resolve(response.data);
  })
    .catch((error) => reject(error));
});

export default { getAllHerbs };
