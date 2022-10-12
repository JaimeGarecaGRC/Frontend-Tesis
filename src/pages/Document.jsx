import React from 'react';
import Header from '../containers/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import Footer from '../containers/footer';
import WatchArticle from '../containers/WatchArticle';

const Document = () => {
    return (
    <> 
        <Header />
        <Sidebar />
        <Title />
        <WatchArticle />
        <Footer/> 
    </>  
    );
}

export default Document;