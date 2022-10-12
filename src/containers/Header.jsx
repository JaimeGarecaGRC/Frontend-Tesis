import React, { useState, useContext, useEffect } from 'react';
import './../styles/Header.scss';

import axios from 'axios';

import Logo_Coni from '@logos/Logo_Coni.svg';

import AppContext from '../context/appContext';

import '@logos/Logo_Coni.svg';
import AppArrayContext from '../context/appArrayContext';

const Header = () => {

    const [busqueda, setBusqueda] = useState('');

    //const [resultado, setResultado] = useState(null);

    const {addToSearch} = useContext(AppContext);


    const handleChange= async e => {
        setBusqueda(e.target.value);
        //const response = await axios('//localhost:3010/api/v1/articles/search?q=' + e.target.value);
        //setResultado(response.data);
        addToSearch(e.target.value);
        
    }

    return (
        <nav className="navbar is-info columns is-centered is-vcentered is-gapless" role="navigation" aria-label="main navigation">
            <div className="navbar-brand column is-one-third is-half">
                <a className="navbar-item" href="">
                    <img src={Logo_Coni} className='is-128x128' width="112" height="28" />
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            {/* Este es el buscador */}
            <div className='column is-one-third is-half'>
                <input className="input is-link is-rounded is-normal mt-3" type="text" value={busqueda} onChange={ handleChange } placeholder="Busca lo que necesites"></input>
            </div>

            <div id="navbarBasicExample column is-one-third is-half" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <a className="button is-link">
                            Configuracion
                        </a>
                        <a className="button is-link">
                            Notificacion
                        </a>
                        <a className="button is-link">
                            Perfil
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

/*
    <nav>
        <div className="navbar-left">
            <img src={Logo_Coni} alt="logo" className="logo" />
        </div>
        <div className="navbar-center">
            <input type="text" className="consult-input" />
        </div>
        <div className="navbar-right">
            <a href="/">
                <img src={Configuration} alt="config" />
            </a>
            <a href="/">
                <img src={Notification} alt="config" />
            </a>
            <a href="/"> 
                <img src={Profile} alt="config" />
            </a>
        </div>
    </nav>

*/

export default Header;