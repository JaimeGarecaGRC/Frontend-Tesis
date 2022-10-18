import React from 'react';
import '../styles/Sidebar.scss';

import Closebar from '@icons/Closebar.svg';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <aside className='menu'>
                <p className='menu-label'>General</p>
                <ul className='menu-list'>
                    <li><a href='/' >Documento</a>
                    <ul>
                        <li><a href='/upload' className='is-active'>Subir Archivo</a></li>
                        <li><a href='/create-article' className='is-active'>Crear Articulo</a></li>
                        <li><a href='/article/41' className='is-active'>Articulo</a></li>
                        <li><a href='/results' className='is-active'>Resultados</a></li>
                    </ul>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

/*
       <div className="menu-left">
            <div className="menu-left-container">   
                <p>MENU</p>
                <hr />
                    <a href="/document">Documento</a>
                <hr />
                    <a href="/category">Categoria</a>
                <hr />
                    <a href="/area">Areas</a>
                <hr />
                    <a href="/ticket">Tickets</a>
                <hr />
                    <a href="/chat">Chat</a>
                <hr />
                    <a href="/user">Usuarios</a>
                <hr />
                    <a href="/group">Grupos</a>
                <hr />
                    <a href="/dashboard">Dashboard</a>
                <hr />
                    <a href="/upload">Subir Doc</a>
                <hr />
            </div>
        <a href="/">
            <img src={Closebar}  alt="cerrar" className="closebar" />
        </a>
    </div>
*/

export default Sidebar;