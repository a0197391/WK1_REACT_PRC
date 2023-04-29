import { getFirestore,collection,addDoc, getDocs, deleteDoc, setDoc, doc  } from "firebase/firestore";
import { getApps, getApp, initializeApp } from 'firebase/app'
import images from "../assets/json/pictures.json"

const firebaseConfig = {
    apiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
    authDomain: "import.image-data-ff9f5.firebaseapp.com",
    projectId: "import.image-data-ff9f5",
    storageBucket: "import.image-data-ff9f5.appspot.com",
    messagingSenderId: "import.302931515565",
    appId: "import.1:302931515565:web:b9884d78cdbc42534ace24",
    // measurementId: "G-C27JP05RB9"
  };

  
const app_length = getApps().length > 0 ;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const imagesCollection = collection(db, "images");

export const feedImages = async () => {
    // DELETE ALL EXISTING DOCS
    const querySnapshot = await getDocs(imagesCollection);
    querySnapshot.forEach(async (image) => {
        await deleteDoc(doc(db, "images", image.id));
    });
    // ADD NEW DOCS
    images.forEach(async (image) => {
        const docRef = await doc(imagesCollection);
        await setDoc(docRef, { ...image });
    });
};

// export const getImages = async () => {
//     let querySnapshot = await getDocs(imagesCollection);

//     // Convert the query to a json array.
//     let result = [];
//     querySnapshot.forEach(async (image) => {
//         await result.push(image.data());
//     });
//     console.log({ result });
//     return result;
// };