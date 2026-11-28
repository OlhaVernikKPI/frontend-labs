// =======================================
// ЗАВДАННЯ 1
// Варіант 2: рядки 1, 3, 4, 5, 6
// =======================================

const form = document.getElementById("dataForm");


const fields = [
    {
        id: "fullName",
        regex:
            /^[А-ЯІЇЄҐ][а-яіїєґ'-]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/u,
        message: "Формат: Прізвище І.П."
    },

    {
        id: "group",
        regex:
            /^[А-ЯІЇЄҐ]{2}-\d{2}$/u,
        message: "Формат: ІС-42"
    },

    {
        id: "phone",
        regex:
            /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
        message: "Формат: (050)-123-45-67"
    },

    {
        id: "idCard",
        regex:
            /^[А-ЯІЇЄҐA-Z]{2}\s№\d{6}$/u,
        message: "Формат: АА №123456"
    },

    {
        id: "faculty",
        regex:
            /^[А-ЯІЇЄҐ]{4}$/u,
        message: "Необхідно 4 великі літери"
    }
];


form.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;

    const result = {};


    fields.forEach(function (field) {

        const input =
            document.getElementById(field.id);

        const row =
            input.closest(".form-row");

        const error =
            row.querySelector(".error");

        const value =
            input.value.trim();


        if (!field.regex.test(value)) {

            row.classList.add("invalid");

            error.textContent =
                field.message;

            isValid = false;
        }
        else {

            row.classList.remove("invalid");

            error.textContent = "";

            result[field.id] = value;
        }
    });


    if (isValid) {

        showResult(result);
    }
});


function showResult(data) {

    const resultWindow =
        window.open(
            "",
            "resultWindow",
            "width=500,height=450"
        );


    resultWindow.document.write(`
        <!DOCTYPE html>

        <html lang="uk">

        <head>
            <meta charset="UTF-8">
            <title>Введені дані</title>
        </head>

        <body>

            <h2>Введені дані</h2>

            <p><strong>ПІБ:</strong>
                ${data.fullName}
            </p>

            <p><strong>Група:</strong>
                ${data.group}
            </p>

            <p><strong>Телефон:</strong>
                ${data.phone}
            </p>

            <p><strong>ID-card:</strong>
                ${data.idCard}
            </p>

            <p><strong>Факультет:</strong>
                ${data.faculty}
            </p>

        </body>

        </html>
    `);

    resultWindow.document.close();
}



// =======================================
// ЗАВДАННЯ 2
// Таблиця 6×6
// Варіант 2
// =======================================

const table =
    document.getElementById("numberTable");

const colorPicker =
    document.getElementById("colorPicker");

const VARIANT = 2;


let number = 1;


for (let row = 0; row < 6; row++) {

    const tr =
        document.createElement("tr");


    for (let column = 0; column < 6; column++) {

        const td =
            document.createElement("td");

        td.textContent = number;

        td.dataset.number = number;


        if (number === VARIANT) {

            td.classList.add("target-cell");

            addVariantEvents(td);
        }


        tr.appendChild(td);

        number++;
    }


    table.appendChild(tr);
}



// =======================================
// ПОДІЇ КОМІРКИ №2
// =======================================

function addVariantEvents(cell) {

    // Наведення:
    // випадковий колір
    cell.addEventListener(
        "mouseenter",
        function () {

            cell.style.backgroundColor =
                getRandomColor();
        }
    );


    // Click:
    // колір з палітри
    cell.addEventListener(
        "click",
        function () {

            cell.style.backgroundColor =
                colorPicker.value;
        }
    );


    // Double click:
    // для варіанта 2
    // фарбуємо відповідний стовпець
    cell.addEventListener(
        "dblclick",
        function () {

            const columnIndex =
                cell.cellIndex;

            const rows =
                table.rows;


            for (
                let i = 0;
                i < rows.length;
                i++
            ) {

                rows[i]
                    .cells[columnIndex]
                    .style.backgroundColor =
                        colorPicker.value;
            }
        }
    );
}



// Випадковий HEX-колір

function getRandomColor() {

    const randomNumber =
        Math.floor(
            Math.random() * 16777215
        );

    return (
        "#" +
        randomNumber
            .toString(16)
            .padStart(6, "0")
    );
}