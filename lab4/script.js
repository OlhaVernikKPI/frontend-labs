
// 3-й елемент — через getElementById()
const thirdElement = document.getElementById("element3");

let thirdChanged = false;

thirdElement.addEventListener("click", function () {

    if (!thirdChanged) {
        thirdElement.style.backgroundColor = "#1f5fa8";
        thirdElement.style.color = "#ffffff";

        thirdChanged = true;
    }
    else {
        thirdElement.style.backgroundColor = "";
        thirdElement.style.color = "";

        thirdChanged = false;
    }
});


// 4-й елемент - через querySelector()
const fourthElement = document.querySelector(".element4");

let fourthChanged = false;

fourthElement.addEventListener("click", function () {

    if (!fourthChanged) {
        fourthElement.style.backgroundColor = "#18844b";
        fourthElement.style.color = "#ffffff";

        fourthChanged = true;
    }
    else {
        fourthElement.style.backgroundColor = "";
        fourthElement.style.color = "";

        fourthChanged = false;
    }
});


// ЗАВДАННЯ 2

const originalImage = document.getElementById("originalImage");

const dynamicImageContainer =
    document.getElementById("dynamicImageContainer");

const statusElement =
    document.getElementById("imageStatus");


// Отримати додане зображення
function getAddedImage() {
    return document.querySelector(".added-image");
}


// Додати зображення
function addImage() {

    // Якщо зображення вже існує,
    // друге не створюємо
    if (getAddedImage()) {
        statusElement.textContent =
            "Додаткове зображення вже додано.";

        return;
    }

    const newImage = document.createElement("img");

    newImage.src = originalImage.src;

    newImage.alt =
        "Додана копія панорами міста Нікосія";

    newImage.classList.add("added-image");

    newImage.style.width = "700px";

    dynamicImageContainer.appendChild(newImage);

    statusElement.textContent =
        "Зображення додано.";
}


// Збільшити зображення
function increaseImage() {

    const image = getAddedImage();

    if (!image) {
        statusElement.textContent =
            "Спочатку додайте зображення.";

        return;
    }

    const currentWidth =
        image.getBoundingClientRect().width;

    const newWidth =
        Math.min(currentWidth + 50, 1000);

    image.style.width =
        newWidth + "px";

    statusElement.textContent =
        "Зображення збільшено.";
}


// Зменшити зображення
function decreaseImage() {

    const image = getAddedImage();

    if (!image) {
        statusElement.textContent =
            "Спочатку додайте зображення.";

        return;
    }

    const currentWidth =
        image.getBoundingClientRect().width;

    const newWidth =
        Math.max(currentWidth - 50, 200);

    image.style.width =
        newWidth + "px";

    statusElement.textContent =
        "Зображення зменшено.";
}


// Видалити зображення
function deleteImage() {

    const image = getAddedImage();

    if (!image) {
        statusElement.textContent =
            "Немає додаткового зображення для видалення.";

        return;
    }

    image.remove();

    statusElement.textContent =
        "Зображення видалено.";
}



// ПІДКЛЮЧЕННЯ ОБРОБНИКІВ КНОПОК

document
    .getElementById("addImage")
    .addEventListener("click", addImage);


document
    .getElementById("increaseImage")
    .addEventListener("click", increaseImage);


document
    .getElementById("decreaseImage")
    .addEventListener("click", decreaseImage);


document
    .getElementById("deleteImage")
    .addEventListener("click", deleteImage);