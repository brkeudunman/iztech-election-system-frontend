import React from 'react';
import './home.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src="logo.png" alt="Logo" className="logo" />
                <span className="first-text">İzmir Yüksek Teknoloji Enstitüsü</span>
            </div>
            
            <span className="second-text">Öğrenci Konseyi Seçim Sistemi</span>
            <div className="navbar-right">
                <span className="third-text">T. Arık</span>
                <button className="button">EN/TR</button>
            </div>
        </div>
    );
}

export default Navbar;
