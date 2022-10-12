import React from 'react';
import Header from '../containers/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import Footer from '../containers/footer';
import FormCreateArticle from '../containers/FormCreateArticle';


const CreateDocument = () => {
    return (
        <>
            <div>
                <Header />
                <Sidebar />
                <Title />
                <FormCreateArticle />
                <Footer/> 
            </div>
        </>

    );
}

export default CreateDocument;