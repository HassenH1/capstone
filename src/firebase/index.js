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
  apiKey: "AIzaSyColdT9rJEuFe4ACjVHyqHdFi_Uyq7gVkI",
  authDomain: "e-commerce-6a142.firebaseapp.com",
  databaseURL: "https://e-commerce-6a142.firebaseio.com",
  projectId: "e-commerce-6a142",
  storageBucket: "e-commerce-6a142.appspot.com",
  messagingSenderId: "798494773585",
  appId: "1:798494773585:web:86a644f2c30686a038c370",
  measurementId: "G-S91NSZKJ0Z",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

export default firebase;
