const API_URL =
    "https://randomuser.me/api/?results=5";

const loadButton =
    document.getElementById("loadButton");

const usersContainer =
    document.getElementById("users");

const statusElement =
    document.getElementById("status");


loadButton.addEventListener("click", loadUsers);


function loadUsers() {

    usersContainer.innerHTML = "";

    statusElement.classList.remove("error");

    statusElement.textContent =
        "Завантаження...";


    fetch(API_URL)

        .then((response) => {

            if (!response.ok) {
                throw new Error(
                    `HTTP error: ${response.status}`
                );
            }

            return response.json();
        })

        .then((data) => {

            displayUsers(data.results);

            statusElement.textContent =
                "Дані успішно отримано.";
        })

        .catch((error) => {

            console.error(error);

            statusElement.classList.add("error");

            statusElement.textContent =
                "Помилка отримання даних.";
        })

        .finally(() => {

            console.log(
                "Запит до API завершено."
            );
        });
}


function displayUsers(users) {

    users.forEach((user) => {

        const card =
            document.createElement("article");

        card.classList.add("user-card");


        const image =
            document.createElement("img");

        image.src =
            user.picture.large;

        image.alt =
            "Фото випадкового користувача";


        const info =
            document.createElement("div");

        info.classList.add("user-info");


        const cell =
            document.createElement("p");

        cell.textContent =
            `Телефон: ${user.cell}`;


        const city =
            document.createElement("p");

        city.textContent =
            `Місто: ${user.location.city}`;


        const country =
            document.createElement("p");

        country.textContent =
            `Країна: ${user.location.country}`;


        const postcode =
            document.createElement("p");

        postcode.textContent =
            `Індекс: ${user.location.postcode}`;


        info.appendChild(cell);
        info.appendChild(city);
        info.appendChild(country);
        info.appendChild(postcode);


        card.appendChild(image);
        card.appendChild(info);


        usersContainer.appendChild(card);
    });
}