// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAZOvyJguEUbivvRM00Tjhb3yjR8KFwo0s',
  authDomain: 'clone-1a5c9.firebaseapp.com',
  databaseURL: 'https://clone-1a5c9.firebaseio.com',
  projectId: 'clone-1a5c9',
  storageBucket: 'clone-1a5c9.appspot.com',
  messagingSenderId: '550409486723',
  appId: '1:550409486723:web:d1b064036cdf15b9ecb6b6',
  measurementId: 'G-L7YE1PCY68',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
