import axios from 'axios';
import React, { useState } from 'react';

import '@icons/File-Upload.svg';
import '@styles/mystyles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const Upload = () => {

    const [archivos, setArchivos]=useState(null);

    const URI = "//localhost:3010/api/v1/files/send";

    const subirArchivos = (e) => {
        setArchivos(e);
    }

    const insertarArchivos = async() => {
        const f = new FormData();

        for (let index = 0; index < archivos.length; index++) {
            f.append('avatar', archivos[index]);
        }

        await axios.post(URI, f)
        .then(response=>{
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='upload-container'>                                              
            <div className='form-upload-container'>
                <div className='file is-boxed is-large is-info'>
                    <label className='file-label'>
                        <input type='file' id='fileupload' className='file-input ' multiple onChange={(e)=> subirArchivos(e.target.files)} />
                        <span className='file-cta'>
                        <span className='file-icon'>
                            <FontAwesomeIcon icon={solid('upload')} />
                        </span>
                            <label htmlFor='fileupload' className='file-label'>Selecciona un Archivo...</label>
                        </span>
                    </label>
                </div>
                <div className='file'>
                </div>
                <div className='botoncito-margen'>  
                    <button type='submit' className='button is-info is-large is-fullwidth is-outlined' onClick={()=>insertarArchivos()}>Subir</button>
                </div>                   
            </div>
        </div>
    );
};

export default Upload;