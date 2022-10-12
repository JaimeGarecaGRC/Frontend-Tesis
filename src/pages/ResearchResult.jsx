import React from 'react';
import Header from '../containers/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import Footer from '../containers/footer';
import Result from '../components/Result';
import ResultSearch from '../containers/ResultSearch';

/*
        <Header />
        <Sidebar />
        <Title />
        
        <Footer/> 
*/

const ResearchResult = () => {
    return (
        <> 
            <Header />
            <Sidebar />
            <Title />
            <ResultSearch/>    
            <Footer/>
        </>  
    );
}

export default ResearchResult;