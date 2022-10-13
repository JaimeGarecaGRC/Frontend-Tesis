import React, { useContext, useEffect, useState } from 'react';
import useGetTypesense from '../hooks/useGetTypesense';
import Result from '../components/Result';
import AppContext from '../context/appContext';
import axios from 'axios';
import { faSearchDollar, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
  

const ResultSearch = () => {

    const {state} = useContext(AppContext);

    const [search, setSearch] = useState([]);



    useEffect(() => {
        async function fetchData() {
            const response = await axios('//localhost:3010/api/v1/articles/search?q=' + state);
            setSearch(response.data);
            console.log(response.data);
        }
        fetchData();
    }, [state]);
    

    return (
        <div className='columns'>
            <div className='content is- column is-half is-offset-one-quarter '>
                {search.map((result, index) =>
                    <Result result={result} key={index}/>
                )}
            </div>
        </div>
    );
}

export default ResultSearch;