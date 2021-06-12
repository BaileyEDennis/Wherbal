import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import { BaseURL } from '../config.json';

const userDataUrl = `${BaseURL}/Users`;

const getUid = () => firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    return user.uid;
  }
  return console.warn('no user logged in.');
});

const loginClickEvent = (e) => {
  e.preventDefault();

  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((cred) => {
    const user = cred.additionalUserInfo.profile;
    console.warn(user);
    if (cred.additionalUserInfo.isNewUser) {
      console.warn(user);
      const userObj = {
        display_Name: user.name,
        Image_Url: user.picture,
        firebase_Uid: cred.user.uid,
      };
      axios.post(`${userDataUrl}`, userObj);
    }
    window.location.href = '/';
  });
};

const logoutClickEvent = (e) => {
  e.preventDefault();
  window.sessionStorage.removeItem('token');
  firebase.auth().signOut();
  window.location.href = '/';
};

const getUserByFirebaseUid = (firebaseUid) => new Promise((resolve, reject) => {
  axios.get(`${userDataUrl}/firebase/${firebaseUid}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default {
  getUid,
  loginClickEvent,
  logoutClickEvent,
  getUserByFirebaseUid,
};
