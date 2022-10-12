import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetTypesense = (API) => {
 
    const [search, setSearch] = useState([]);

    useEffect(async() => {
        const response = await axios(API);
        setSearch(response.data);
    }, []);

    return search;
}

export default useGetTypesense;