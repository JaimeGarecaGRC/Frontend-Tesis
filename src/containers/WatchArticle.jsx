import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useGetArticle from '../hooks/useGetArticle';
import useGetContent from '../hooks/useGetContent';


const WatchArticle =  () => {
    
    const article = useGetArticle("//localhost:3010/api/v1/articles/1");

    console.log(article);

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