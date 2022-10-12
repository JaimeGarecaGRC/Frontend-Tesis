import React from 'react';
import './../styles/Title.scss';

import Title_Icon from '@icons/Title-Icon.svg';

const texto = 'TITULO    '

const Title = () => {
    return (
        <div>
            <nav className="breadcrumb is-normal is-right" aria-label="breadcrumbs">
                <ul>
                    <li className='is-active'>
                        <a href="#">
                            <span className='icon is-big'>
                                <i className='fas fa-home' aria-hidden='true'></i>
                            </span>
                            <span>TITULO</span>
                        </a>
                    </li>
                    <li className='is-active'><a href="#">Actualizado hace ... dias</a></li>
                </ul>
            </nav>
        </div>
    );
}

/*
        <div className='title'>
        <div className='title-container'>
            <img src={Title_Icon} alt='title-icon' className='title-icon' />
            <h1 className='title-txt'>Titulo</h1>
            <p className='updated-txt'>/ Actualizado hace ...dias</p>
        </div>
    </div>
*/

export default Title;