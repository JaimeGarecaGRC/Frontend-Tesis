import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import useGetArticle from '../hooks/useGetArticle';
import useGetContent from '../hooks/useGetContent';

const WatchArticle =  () => {

    const prueba = useParams();
    console.log(prueba);

    const article = useGetArticle(`//localhost:3010/api/v1/articles/${prueba.articleId}`);

    return (
        <div className='columns'>
            <div className='content is-large column is-half is-offset-one-quarter '>
                <h1>{article.titulo}</h1>
                <p>{article.palabras_clave}</p>
                <p>{article.descripcion}</p>
                {article.ContenidoArticulo?.map( (conten, index) =>   
                    <p key={index}>{conten.descripcion}</p>
                )}
            </div>
        </div>

    );
}

export default WatchArticle;