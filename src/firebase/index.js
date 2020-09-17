import app from "firebase/app";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC7g852V4B4nAEI1Lm_VRNN-cm15uTmazI",
  authDomain: "clothingstore-bedef.firebaseapp.com",
  databaseURL: "https://clothingstore-bedef.firebaseio.com",
  projectId: "clothingstore-bedef",
  storageBucket: "clothingstore-bedef.appspot.com",
  messagingSenderId: "314969685077",
  appId: "1:314969685077:web:3728b1bc9485f6790268dc",
};
// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

export default firebase;
