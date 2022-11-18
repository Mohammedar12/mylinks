// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app"; // TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, collection, getDocs } from "../node_modules/firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDixalqlN9amlFldXYbkVBZRWQS7Dvyx4o",
  authDomain: "links-temp.firebaseapp.com",
  projectId: "links-temp",
  storageBucket: "links-temp.appspot.com",
  messagingSenderId: "933909473473",
  appId: "1:933909473473:web:d459be4c17d0de73540c40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

getCities()