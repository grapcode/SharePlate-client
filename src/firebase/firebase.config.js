// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFydisabbAnBqSw0j6nEWN6Dg2fti66lU',
  authDomain: 'share-plate-9ef1e.firebaseapp.com',
  projectId: 'share-plate-9ef1e',
  storageBucket: 'share-plate-9ef1e.firebasestorage.app',
  messagingSenderId: '710142389381',
  appId: '1:710142389381:web:7d730c4123e3e99b6b0dec',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
