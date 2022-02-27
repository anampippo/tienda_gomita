import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKlAbGbXoYFI0ZDeAidvT59Pso-Z24tsQ",
  authDomain: "tienda-gomita.firebaseapp.com",
  projectId: "tienda-gomita",
  storageBucket: "tienda-gomita.appspot.com",
  messagingSenderId: "30407988619",
  appId: "1:30407988619:web:084ebcfdecad9d63fe4b8e",
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore (app);