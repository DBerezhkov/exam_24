import React from "react";
import './Gallery.css';

function Gallery() {
    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Наша фотогалерея</h1>
            <p className="gallery-subtitle">Здесь вы можете увидеть наши лучшие проекты по строительству домов.</p>
            <div className="gallery">
                <div className="image-row">
                    <img src="/galery1.jpg" alt="Дом 1" className="gallery-image" />
                    <img src="/galery2.jpeg" alt="Дом 2" className="gallery-image" />
                    <img src="/galery3.jpg" alt="Дом 3" className="gallery-image" />
                </div>
                <div className="image-row">
                    <img src="/galery4.jpeg" alt="Дом 4" className="gallery-image" />
                    <img src="/galery5.jpg" alt="Дом 5" className="gallery-image" />
                    <img src="/galery6.jpg" alt="Дом 6" className="gallery-image" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
