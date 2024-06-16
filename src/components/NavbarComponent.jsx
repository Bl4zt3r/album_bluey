import React, { useState } from 'react';
import '../index.css';

const NavbarComponent = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleToggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const handleButtonClick = (route) => {
        window.location.href = route;
    };

    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ fontSize: '1rem' }}>
                        <button className="nav-link btn2  btn-primary text-white" style={{ border: '2px solid white', margin: '5px' }} onClick={() => handleButtonClick('/')}>
                            INICIO
                        </button>
                        <button className="nav-link btn2 btn-primary text-white" style={{ border: '2px solid white', margin: '5px' }} onClick={() => handleButtonClick('/registrar')}>
                            MODIFICAR
                        </button>
                        <button className="nav-link btn2 btn-primary text-white" style={{ border: '2px solid white', margin: '5px' }} onClick={() => handleButtonClick('/registrarHistorial')}>
                            LAMINAS
                        </button>
                        <button className="nav-link btn2 btn-primary text-white" style={{ border: '2px solid white', margin: '5px' }} onClick={() => handleButtonClick('/report')}>
                            VER DATOS
                        </button>
                    </div>
                </div>
            </div>



        </nav>
    );
};

export default NavbarComponent;
