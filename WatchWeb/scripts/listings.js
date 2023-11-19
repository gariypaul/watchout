import {app,auth, db,  storage} from "./main.js"
import { getDatabase, ref, push, child, get, set } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

const watchList = document.getElementById('watchList');
        const watchesRef = ref(db, 'watches');

        get(watchesRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                        const watchData = childSnapshot.val();
                        const watchCard = createWatchCard(watchData);
                        watchList.appendChild(watchCard);
                    });
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

        function createWatchCard(watchData) {
            const col = document.createElement('div');
            col.className = 'col-md-4';

            const card = document.createElement('div');
            card.className = 'card';
            card.style = 'width: 18rem;';

            const image = document.createElement('img');
            image.className = 'card-img-top';
            image.src = watchData.imageUrl;
            image.alt = 'Watch Image';
            card.appendChild(image);

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = watchData.name;
            cardBody.appendChild(title);

            const description = document.createElement('p');
            description.className = 'card-text';
            description.textContent = `Description: ${watchData.description}`;
            cardBody.appendChild(description);

            const price = document.createElement('p');
            price.className = 'card-text';
            price.textContent = `Price: $${watchData.price}`;
            cardBody.appendChild(price);

            const size = document.createElement('p');
            size.className = 'card-text';
            size.textContent = `Size: ${watchData.size}mm`;
            cardBody.appendChild(size);

            const material = document.createElement('p');
            material.className = 'card-text';
            material.textContent = `Material: ${watchData.material}`;
            cardBody.appendChild(material);

            card.appendChild(cardBody);
            col.appendChild(card);
            return col;
        }