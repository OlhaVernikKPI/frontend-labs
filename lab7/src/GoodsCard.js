function GoodsCard({ image, name, price }) {

    return (
        <article className="goods-card">

            <img
                src={image}
                alt={name}
            />

            <h3>{name}</h3>

            <p className="price">
                {price}
            </p>

        </article>
    );
}

export default GoodsCard;