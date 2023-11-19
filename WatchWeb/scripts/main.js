import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, push, child, get, set } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";


const firebaseConfig = {
    apiKey: "AIzaSyATTLXHrjxowvjDwokc8unc1bOc6veqdCw",
    authDomain: "watchout-84cc5.firebaseapp.com",
    databaseURL: "https://watchout-84cc5-default-rtdb.firebaseio.com",
    projectId: "watchout-84cc5",
    storageBucket: "watchout-84cc5.appspot.com",
    messagingSenderId: "73851933764",
    appId: "1:73851933764:web:54b79f1c6137923196d811"
};
//initialise and export app and databases data 
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);

//export firebase authenticator
export const auth = getAuth();


