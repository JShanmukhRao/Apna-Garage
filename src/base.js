import Rebase from 're-base';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAZOkX1Y2uAGnJrH72v-YSEwZ8vqkdg_Jc",
  authDomain: "apna-garage1.firebaseapp.com",
  databaseURL: "https://apna-garage1.firebaseio.com",
  projectId: "apna-garage1",
  storageBucket: "apna-garage1.appspot.com",
  messagingSenderId: "787388034625",
  appId: "1:787388034625:web:72d229a8c5da34fd7de0c0",
  measurementId: "G-VE8B9G06L8"
};
  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())
  export  { base }