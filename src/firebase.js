import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyC_JuC8UjemmW_Og5EsLwgJ5X67bDcoS1E",
  authDomain: "hhapp-305f2.firebaseapp.com",
  databaseURL: "https://hhapp-305f2.firebaseio.com",
  projectId: "hhapp-305f2",
  storageBucket: "",
  messagingSenderId: "280248667251"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}

let userID = null;
  if (auth.currentUser) {
    userID = auth.currentUser.uid
  } else {
    userID = localStorage.getItem(storageKey);
  }

  export const curUserID = userID;

export default firebase;