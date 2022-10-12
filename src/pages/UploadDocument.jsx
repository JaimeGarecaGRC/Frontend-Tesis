import React from 'react';
import Header from '../containers/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import Footer from '../containers/footer';
import Upload from '../containers/Upload';

import '../styles/Upload.scss';

/*
        <Header />
        <Sidebar />
        <Title />
        <Upload /> 
        <Footer/> 
*/

const UploadDocument = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Title />
            <Upload /> 
            <Footer/> 
        </> 
    );
}

export default UploadDocument;