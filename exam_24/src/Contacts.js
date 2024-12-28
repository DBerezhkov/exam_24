import React from "react";
import './index.css';

function Contacts() {
    return(
        <main className="contacts-page">
            <h1>Контактная информация</h1>
            <section className="contacts-content">
                <p>📍 **Адрес:** г. Москва, ул. Примерная д. 10</p>
                <p>📞 **Телефон:** 8 (999) 177-17-17</p>
                <p>✉️ **Email:** info@architecturecomfort.ru</p>
                <p>🕒 **Часы работы:** Пн - Пт: 10:00 - 19:00 Сб: 10:00 - 16:00 Вс: выходной</p>
            </section>
        </main>
    )
}

export default Contacts;