import {auth} from "./main.js"
import {signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

auth.onAuthStateChanged(function(user){
    if(user){
        document.getElementById("log-out").style.display="block";
        document.getElementById("protected-content").style.display="block";
    }else{
        document.getElementById("log-out").style.display="none";
        document.getElementById("protected-content").style.display="none";
        if(window.location.pathname.includes('additem.html')){
            window.location.href='SignIn.html'
        }
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