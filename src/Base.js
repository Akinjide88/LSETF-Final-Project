import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD7AlLHRVf146MrDVgAGsZyJ0wLzLOJVKc",
    authDomain: "lsetf-data.firebaseapp.com",
    projectId: "lsetf-data",
    storageBucket: "lsetf-data.appspot.com",
    messagingSenderId: "403309694748",
    appId: "1:403309694748:web:acbf2e3229159a8e98b4d9",
    measurementId: "G-DV0CV4QLVM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
