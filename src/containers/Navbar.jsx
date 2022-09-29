import React from 'react';
import './../styles/Navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-left">
                <img src="../logos/Logo_Coni.svg" alt="logo" className="logo" />
            </div>
            <div className="navbar-center">
                <input type="text" className="consult-input" />
            </div>
            <div className="navbar-right">
                <a href="/">
                    <img src="../icons/configuration.svg" alt="config" />
                </a>
                <a href="/">
                    <img src="../icons/notification.svg" alt="config" />
                </a>
                <a href="/">
                    <img src="../icons/profile.svg" alt="config" />
                </a>
            </div>
        </nav>  
    );
}

export default Navbar;
