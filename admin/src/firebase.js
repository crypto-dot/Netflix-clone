import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCahHsTyy847UIpH34dPyNKZGKZUk8nwWk",
    authDomain: "netflix-7a16d.firebaseapp.com",
    projectId: "netflix-7a16d",
    storageBucket: "netflix-7a16d.appspot.com",
    messagingSenderId: "1031095758202",
    appId: "1:1031095758202:web:d1e9502f5f36e8df403ac3",
    measurementId: "G-W8WST90J23"
};

initializeApp(firebaseConfig);
export const storage = getStorage();