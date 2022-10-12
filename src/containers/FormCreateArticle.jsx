import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

const FormCreateArticle = () => {

    const URI = '//localhost:3010/api/v1/articles/create';
    const form = useRef(null);


    const handleSumbit = async () => {
        const formData = new FormData(form.current);
        const dataArticulo =  {
            titulo: formData.get('title'),
            palabras_clave: formData.get('keywords'),
            descripcion: formData.get('description')
        };

        await axios.post(URI, dataArticulo)
        .then(async response=>{
            console.log(response.data);

            await axios.post(`//localhost:3010/api/v1/contents_article/create/${response.data.id}` , box)
            .then(responsed=>{
                console.log(responsed.data);
            }).catch(error => {      
                console.log(error);
            });
            
            await axios.post(`//localhost:3010/api/v1/articles/add-article-typesense/${response.data.id}`, dataArticulo)
            .then(response=>{
                console.log(response.data);
            }).catch(error => {      
                console.log(error);
            });
        }).catch(error => {
            console.log(error);
        });
    }
    
    const [box, setBox] = useState([]);

    const createBox = () => {   
        setBox((current) => ([...current, 
            {
                posicion: '',
                descripcion: '',
                articuloId: ''
            }]
            ));
    }

    const handleChange = async (index, event) => {
        let data = [ ...box];
        data[index]['posicion'] = index+1;
        data[index][event.target.name] = event.target.value;
        data[index]['articuloId'] = 1;
        setBox(data);
        console.log(data);
    }



    return (
    <>
        <div className='columns is-vcentered '>
            <form  className='column is-half is-offset-one-quarter'ref={form} >
                <div className="field">
                    <label htmlFor='title' className="label">Titulo</label>
                    <div className="control">
                        <input className="input" name='title' type="text" placeholder="Titulo del Articulo" />
                    </div>
                </div>
                
                <div className="field">
                    <label htmlFor='keywords' className="label">Palabras Clave</label>
                    <div className="control ">
                        <input className="input" name='keywords' type="text" placeholder="Desarrollo, Marketing, Ventas, ..." />
                        {/* 
                            has-icons-left has-icons-right
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span> */}
                    </div>
                </div>
                
                <div className="field">
                    <label htmlFor='description' className="label">Descripcion</label>
                    <div className="control">
                        <textarea name='description' className="textarea" placeholder="Descripcion"></textarea>
                    </div>
                </div>

                <div className="field is-grouped is-vcentered ">
                    <div className="control">
                        <button type="button" className="button is-link" onClick={handleSumbit}>Submit</button>
                    </div>
                    <div className="control">
                        <button type="button"  className="button is-link is-light">Cancel</button>
                    </div>
                </div>

                {box.map((input, index) => (
                    <div key={index}>
                        <textarea className="textarea" name='descripcion' value={input.descripcion} onChange={event => handleChange(index, event)} placeholder={"Contenido " + (index + 1)}></textarea>
                    </div>
                ))}
                
                <button className="button is-link" type="button" onClick={createBox}>+</button>
            </form>
        </div>
    </>
    );  
}


// 

export default FormCreateArticle;