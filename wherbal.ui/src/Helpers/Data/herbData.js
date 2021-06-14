import axios from 'axios';
import { BaseURL } from '../config.json';

const herbUrl = `${BaseURL}`;

const getAllHerbs = () => new Promise((resolve, reject) => {
  axios.get(`${herbUrl}/herbs`).then((response) => {
    resolve(response.data);
  })
    .catch((error) => reject(error));
});

const getSingleHerb = (herbId) => new Promise((resolve, reject) => {
  axios.get(`${herbUrl}/herbs/${herbId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const addHerbToWishList = (herbId, userId) => new Promise((resolve, reject) => {
  axios.post(`${herbUrl}/Wish_Herbs/${herbId}/${userId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const addHerbToSavedList = (herbId, userId) => new Promise((resolve, reject) => {
  axios.post(`${herbUrl}/Saved_Herbs/${herbId}/${userId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getAllWishlistHerbs = (id) => new Promise((resolve, reject) => {
  axios.get(`${herbUrl}/Wishlist/${id}`).then((response) => {
    resolve(response.data);
  })
    .catch((error) => reject(error));
});

const getAllSavedlistHerbs = (id) => new Promise((resolve, reject) => {
  axios.get(`${herbUrl}/Savedlist/${id}`).then((response) => {
    resolve(response.data);
  })
    .catch((error) => reject(error));
});

const DeleteSavedHerb = (id) => axios.delete(`${herbUrl}/Saved_Herbs/${id}`);

const DeleteWishHerb = (id) => axios.delete(`${herbUrl}/Wish_Herbs/${id}`);

export default {
  getAllHerbs,
  getSingleHerb,
  addHerbToWishList,
  getAllWishlistHerbs,
  addHerbToSavedList,
  getAllSavedlistHerbs,
  DeleteSavedHerb,
  DeleteWishHerb,
};
