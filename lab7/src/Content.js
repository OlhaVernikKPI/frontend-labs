import React, { Component } from "react";

class Content extends Component {

    state = {
        thirdChanged: false,
        fourthChanged: false
    };


    toggleThird = () => {
        this.setState({
            thirdChanged:
                !this.state.thirdChanged
        });
    };


    toggleFourth = () => {
        this.setState({
            fourthChanged:
                !this.state.fourthChanged
        });
    };


    render() {

        return (
            <section className="content">

                <p>
                    Дата і місце народження:
                    04.12.2006, м. Київ, Україна.
                </p>

                <p
                    className={
                        this.state.thirdChanged
                            ? "interactive changed-third"
                            : "interactive"
                    }
                    onClick={this.toggleThird}
                >
                    Освіта: навчалася у ліцеї №145
                    міста Києва. Зараз навчаюся
                    у КПІ ім. Ігоря Сікорського.
                </p>


                <h3
                    className={
                        this.state.fourthChanged
                            ? "interactive changed-fourth"
                            : "interactive"
                    }
                    onClick={this.toggleFourth}
                >
                    Мої хобі
                </h3>

                <ul>
                    <li>Волейбол</li>
                    <li>Капоейра</li>
                    <li>Туризм</li>
                    <li>Фотографія</li>
                </ul>


                <h3>Мої улюблені книги</h3>

                <ol>
                    <li>
                        Путівник по Галактиці
                        для космотуристів
                    </li>

                    <li>
                        Ресторан «Кінець світу»
                    </li>

                    <li>
                        Життя, Всесвіт
                        і все інше
                    </li>
                </ol>


                <h3>Моє улюблене місто</h3>

                <p>
                    Одним із моїх улюблених міст
                    є Нікосія — столиця Кіпру.
                    Я не лише відвідувала місто,
                    а й певний час жила там.
                </p>

            </section>
        );
    }
}

export default Content;