import "./App.css";

import Header from "./Header";
import Content from "./Content";
import Image from "./Image";
import GoodsCard from "./GoodsCard";


const goods = [
    {
        id: 1,
        name: "Ноутбук",
        price: "899 €",
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        id: 2,
        name: "Навушники",
        price: "59 €",
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 3,
        name: "Годинник",
        price: "129 €",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 4,
        name: "Смартфон",
        price: "699 €",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
        id: 5,
        name: "Парфуми",
        price: "79 €",
        image:
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"
    },
    {
        id: 6,
        name: "Кросівки",
        price: "99 €",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    }
];


function App() {

    return (
        <main className="container">

            <Header />

            <Content />

            <Image />


            <section className="goods-section">

                <h2>
                    Галерея товарів
                </h2>

                <div className="goods-grid">

                    {goods.map((good) => (

                        <GoodsCard
                            key={good.id}
                            image={good.image}
                            name={good.name}
                            price={good.price}
                        />

                    ))}

                </div>

            </section>

        </main>
    );
}

export default App;