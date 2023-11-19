import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";
import { getAuth,signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyATTLXHrjxowvjDwokc8unc1bOc6veqdCw",
    authDomain: "watchout-84cc5.firebaseapp.com",
    databaseURL: "https://watchout-84cc5-default-rtdb.firebaseio.com",
    projectId: "watchout-84cc5",
    storageBucket: "watchout-84cc5.appspot.com",
    messagingSenderId: "73851933764",
    appId: "1:73851933764:web:54b79f1c6137923196d811"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
auth.onAuthStateChanged(function(user){
    if(user){
        document.getElementById("log-out").style.display="block";
    }else{
        document.getElementById("log-out").style.display="none";
    }
});

function logout(){
    signOut(auth).then(()=>{
        alert("Logged out");
        window.location.href="home.html";
    }).catch((error)=>{
        alert("Sign out error", error);
    });
}

document.addEventListener('DOMContentLoaded', (event)=>{
    document.getElementById("log-out").addEventListener('click', logout);
});
