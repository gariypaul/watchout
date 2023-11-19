import {app,auth, db,  storage} from "./main.js"
import { ref, push, child, get, set } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";

document.getElementById('watchForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const watchName = document.getElementById('watchName').value;
    const watchPrice = document.getElementById('watchPrice').value;
    const watchSize = document.getElementById('watchSize').value;
    const watchMaterial = document.getElementById('watchMaterial').value;
    const watchDescription = document.getElementById('watchDescription').value;
    const watchImage = document.getElementById('watchImage').files[0];

    // Firebase database reference
    const watchesRef = ref(db, 'watches');
    const newWatchRef = push(watchesRef);

    // Upload image to Firebase Storage
    const storageReference = storageRef(storage, 'watch_images/' + watchImage.name);
    const uploadTask = uploadBytes(storageReference, watchImage);

    uploadTask.then(snapshot => {
        getDownloadURL(snapshot.ref).then(downloadURL => {
            // Create the watch item in the database
            set(newWatchRef, {
                name: watchName,
                price: watchPrice,
                size: watchSize,
                material: watchMaterial,
                description: watchDescription,
                imageUrl: downloadURL
            });

            // Reset the form after successful submission
            document.getElementById('watchForm').reset();
            alert('Watch listing added successfully!');
        });
    }).catch(error => {
        console.error('Error uploading image: ', error);
    });
});

