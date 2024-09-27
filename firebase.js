// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZqRWD2CvzYZp2diFWqhyLQm3ZSHJ0-vQ',
  authDomain: 'dev-jethro.firebaseapp.com',
  projectId: 'dev-jethro',
  storageBucket: 'dev-jethro.appspot.com',
  messagingSenderId: '352672311579',
  appId: '1:352672311579:web:e8767e40c6784212eb0bbe',
  measurementId: 'G-66CSECH5F1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);