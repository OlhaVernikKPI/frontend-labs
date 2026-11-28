import { useState } from "react";

const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/8/86/Nicosia%27s_Skyline.jpg";


function Image() {

    const [imageAdded, setImageAdded] =
        useState(false);

    const [imageWidth, setImageWidth] =
        useState(500);


    const addImage = () => {
        setImageAdded(true);
        setImageWidth(500);
    };


    const increaseImage = () => {

        if (!imageAdded) {
            return;
        }

        setImageWidth((width) =>
            Math.min(width + 50, 900)
        );
    };


    const decreaseImage = () => {

        if (!imageAdded) {
            return;
        }

        setImageWidth((width) =>
            Math.max(width - 50, 200)
        );
    };


    const deleteImage = () => {
        setImageAdded(false);
    };


    return (
        <section className="image-section">

            <a
                href="https://www.nicosia.org.cy/en-GB/home/"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="main-image"
                    src={imageUrl}
                    alt="Нікосія"
                />
            </a>


            {imageAdded && (
                <img
                    className="added-image"
                    src={imageUrl}
                    alt="Додана Нікосія"
                    style={{
                        width: `${imageWidth}px`
                    }}
                />
            )}


            <div className="buttons">

                <button onClick={addImage}>
                    Додати
                </button>

                <button onClick={increaseImage}>
                    Збільшити
                </button>

                <button onClick={decreaseImage}>
                    Зменшити
                </button>

                <button onClick={deleteImage}>
                    Видалити
                </button>

            </div>

        </section>
    );
}

export default Image;