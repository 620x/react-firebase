import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
    apiKey: "AIzaSyBAVepZ681tWUUTwY01ewftYMC9YkGb6jU",
    authDomain: "pet-project-3f7ba.firebaseapp.com",
    databaseURL: "https://pet-project-3f7ba.firebaseio.com",
    projectId: "pet-project-3f7ba",
    storageBucket: "pet-project-3f7ba.appspot.com",
    messagingSenderId: "574656969877",
    appId: "1:574656969877:web:455eb61451803f99"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;