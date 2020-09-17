import app from "firebase/app";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyColdT9rJEuFe4ACjVHyqHdFi_Uyq7gVkI",
//   authDomain: "e-commerce-6a142.firebaseapp.com",
//   databaseURL: "https://e-commerce-6a142.firebaseio.com",
//   projectId: "e-commerce-6a142",
//   storageBucket: "e-commerce-6a142.appspot.com",
//   messagingSenderId: 798494773585,
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

// REACT_APP_API_KEY =
// REACT_APP_AUTH_DOMAIN = "e-commerce-6a142.firebaseapp.com"
// REACT_APP_DATABASE_URL = "https://e-commerce-6a142.firebaseio.com"
// REACT_APP_PROJECT_ID = "e-commerce-6a142"
// REACT_APP_STORAGE_BUCKET = "e-commerce-6a142.appspot.com"
// REACT_APP_MESSAGING_SENDER_ID = 798494773585
