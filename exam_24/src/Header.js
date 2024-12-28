import React from 'react';
import './Header.css';

function Header() {

    return (
        <header>
            <h1>Строительство Домов</h1>
            <img 
                src="/logo.png" 
                alt="Логотип компании" 
                className="logo"
            />
            <nav>
                <ul>
                    <li><a href="/#">Описание компании</a></li>
                    <li><a href="/Calculator">Рассчитать стоимость</a></li>
                    <li><a href="/Gallery">Фотогалерея</a></li>
                    <li><a href="/Services">Услуги</a></li>
                    <li><a href="/Reviews">Отзывы</a></li>
                    <li><a href="/Contacts">Как с нами связаться</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;