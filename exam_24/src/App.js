import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import Contacts from './Contacts';
import Services from './Services';
import Calculator from './Calculator';
import Reviews from './Reviews';

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
      <Route path='/' element={
        <main>
          <section className="hero">
          <h1>Добро пожаловать в нашу Строительную Компанию "Дома Номер 1"!</h1>
          </section>
          <section className="about-company">
              <h2>О нашей компании</h2>
              <div className="about-content">
                <p>
                Архитектура Комфорта — это надежный партнер в сфере строительства домов, который предлагает полный спектр 
                услуг по проектированию и возведению жилых и коммерческих объектов. Наша команда состоит из опытных
                 специалистов, которые обладают глубокими знаниями и навыками в области строительства, архитектуры и дизайна. 
                 Мы стремимся к высокому качеству работы и индивидуальному подходу к каждому клиенту, что позволяет нам 
                 успешно реализовывать проекты любой сложности.
                 С момента своего основания, Архитектура Комфорта зарекомендовала себя как надежный и ответственный 
                 подрядчик, который ценит доверие своих клиентов. Мы используем только современные технологии и качественные 
                 материалы, что гарантирует долговечность и надежность построенных объектов.
                </p>
                <h2>История компании</h2>
                <p>
                Основана в 2010 году, компания "Атмосфера комфорта" быстро зарекомендовала себя на рынке строительства 
                благодаря качеству и надежности своих услуг.
                За годы работы компания реализовала множество успешных проектов, включая жилые комплексы, загородные дома и
                 коммерческие объекты. В 2015 году "Атмосфера комфорта" получила несколько наград за инновации в строительстве и дизайне.
                </p>
                <h2>Команда</h2>
                <p>
                В команде компании работают высококвалифицированные специалисты, включая архитекторов, инженеров и строителей с многолетним опытом.
Компания активно инвестирует в обучение и развитие своих сотрудников, что позволяет поддерживать высокий уровень профессионализма.
Руководство компании состоит из опытных менеджеров, которые имеют успешный опыт работы в строительной отрасли и управлении проектами.
                </p>
              </div>
            </section>
        </main>
      } />
        <Route path="/Gallery" element={<Gallery />} /> 
        <Route path="/Contacts" element={<Contacts />} /> 
        <Route path="/Services" element={<Services />} /> 
        <Route path="/Calculator" element={<Calculator />} /> 
        <Route path="/Reviews" element={<Reviews />} /> 
      </Routes>
    </Router>
  );
}

export default App;