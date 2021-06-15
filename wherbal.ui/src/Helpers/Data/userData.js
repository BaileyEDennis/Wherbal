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
    if (cred.additionalUserInfo.isNewUser) {
      debugger;
      const userObj = {
        display_Name: cred.user.displayName,
        Image_Url: cred.user.photoURL,
        firebase_Uid: cred.user.uid,
      };
      axios.post(`${userDataUrl}`, userObj).then(() => { window.location.href = '/'; });
    } else {
      window.location.href = '/';
    }
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
